package storage

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/0xZurvan/Kiron2X/models"
	_ "github.com/lib/pq"
)

type Postgres struct {
	db *sql.DB
}

func NewPostgres() (*Postgres, error) {
	connStr := "postgres://postgres:78953kiron2x@host.docker.internal:5432/kiron2xDB?sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	fmt.Println("Connected to the PostgreSQL database")

	return &Postgres{
		db: db,
	}, nil
}

// Album
func (p *Postgres) GetAllAlbums() (*[]models.Album, error) {
	query := `SELECT id, title, image, user_id, category FROM albums`

	rows, err := p.db.Query(query)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var albums []models.Album

	for rows.Next() {
		var album models.Album
		err := rows.Scan(&album.ID, &album.Title, &album.Image, &album.UserId, &album.Category)
		if err != nil {
			log.Println(err)
		}

		albums = append(albums, album)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return &albums, nil

}

func (p *Postgres) GetAlbumById(albumId int64) (models.Album, error) {
	var album models.Album
	query := `SELECT id, title, image, user_id, category FROM albums WHERE id = $1`

	row := p.db.QueryRow(query, albumId)
	if err := row.Scan(&album.ID, &album.Title, &album.Image, &album.UserId, &album.Category); err != nil {
		if err == sql.ErrNoRows {
			return album, err
		}

		return album, err
	}

	return album, nil

}

func (p *Postgres) GetAlbumBySongId(songId int64) (models.Album, error) {
	query := `
		SELECT album.id, album.title, album.image, album.user_id, album.category
		FROM albums album
		JOIN songs song ON album.id = song.album_id
		WHERE song.id = $1
		LIMIT 1
	`

	var album models.Album
	err := p.db.QueryRow(query, songId).
		Scan(&album.ID, &album.Title, &album.Image, &album.UserId, &album.Category)

	if err != nil {
		return album, err
	}

	return album, nil
}

func (p *Postgres) CreateNewAlbum(album *models.AlbumQuery) (int64, error) {
	var albumId int64

	query := `
	INSERT INTO albums (title, image, user_id, category) 
	VALUES ($1, $2, $3, $4)
	RETURNING id
	`
	err := p.db.QueryRow(
		query,
		&album.Title,
		&album.Image,
		&album.UserId,
		&album.Category,
	).Scan(&albumId)

	if err != nil {
		return 0, err
	}

	return albumId, nil
}

func (p *Postgres) AddSongsToAlbumId(songs *[]models.SongQuery) error {
	if songs != nil {
		for _, song := range *songs {
			_, err := p.AddNewSongToAlbum(&song)
			if err != nil {
				log.Println("Error adding songs to album:", err)
				return nil
			}
		}
	}

	return nil
}

func (p *Postgres) RemoveAlbumById(albumId int64) error {
	// Remove all songs in songs table related to album
	removeSongsQuery := `DELETE FROM songs WHERE album_id = $1`

	_, songErr := p.db.Exec(removeSongsQuery, albumId)
	if songErr != nil {
		return songErr
	}

	// Remove album from albums table
	removeAlbumQuery := `DELETE FROM albums WHERE id = $1`

	_, albumErr := p.db.Exec(removeAlbumQuery, albumId)
	if albumErr != nil {
		return albumErr
	}

	return nil
}

// Song
func (p *Postgres) GetSongById(songId int64) (models.Song, error) {
	var song models.Song

	query := `
	SELECT id, title, image, file, duration, user_id, album_id, category 
	FROM songs 
	WHERE id = $1
	`
	
	row := p.db.QueryRow(query, songId)
	if err := row.Scan(&song.ID, &song.Title, &song.Image, &song.File, &song.Duration, &song.UserId, &song.AlbumId, &song.Category); err != nil {
		if err != nil {
			return song, err
		}

		return song, err
	}

	return song, nil
}

func (p *Postgres) GetAllSongsInAlbumById(albumId int64) (*[]models.Song, models.Album, error) {
	query := `
	SELECT id, title, image, file, duration, user_id, album_id, category
	FROM songs 
	WHERE album_id = $1
	`

	rows, err := p.db.Query(query, albumId)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var songs []models.Song
	var album models.Album

	for rows.Next() {
		var song models.Song
		err := rows.Scan(&song.ID, &song.Title, &song.Image, &song.File, &song.Duration, &song.UserId, &song.AlbumId, &song.Category)
		if err != nil {
			return nil, album, err
		}

		songs = append(songs, song)
	}

	if err := rows.Err(); err != nil {
		return nil, album, err
	}

	album, err = p.GetAlbumById(albumId)
	if err != nil {
		log.Println(err)
	}

	return &songs, album, nil
}

func (p *Postgres) AddNewSongToAlbum(song *models.SongQuery) (int64, error) {
	var songId int64

	songQuery := `
	INSERT INTO songs (title, image, file, duration, user_id, album_id, category)
	VALUES ($1, $2, $3, $4, $5, $6, $7)
	RETURNING id
	`
	err := p.db.QueryRow(
		songQuery,
		song.Title,
		song.Image,
		song.File,
		song.Duration,
		song.UserId,
		song.AlbumId,
		song.Category,
	).Scan(&songId)

	if err != nil {
		// Check for sql.ErrNoRows and handle it accordingly
		if err == sql.ErrNoRows {
			return 0, fmt.Errorf("no rows were returned")
		}
		log.Println("Error executing query:", err)
		return 0, err
	}

	return songId, nil
}

func (p *Postgres) RemoveSongById(songId int64) error {
	query := `DELETE FROM songs WHERE id = $1`

	_, err := p.db.Exec(query, songId)
	if err != nil {
		log.Println(err)
	}

	return nil
}

// Playlist
func (p *Postgres) GetPlaylistById(playlistId int64) (models.Playlist, error) {
	var playlist models.Playlist
	query := `SELECT id, name, user_id, is_private FROM playlists WHERE id = $1`

	row := p.db.QueryRow(query, playlistId)
	if err := row.Scan(&playlist.ID, &playlist.Name, &playlist.UserId, &playlist.IsPrivate); err != nil {
		if err == sql.ErrNoRows {
			return playlist, err
		}

		return playlist, err
	}

	return playlist, nil

}

func (p *Postgres) GetAllPlaylists() (*[]models.Playlist, error) {
	query := `SELECT id, name, user_id, is_private FROM playlists`

	rows, err := p.db.Query(query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var playlists []models.Playlist

	for rows.Next() {
		var playlist models.Playlist
		err := rows.Scan(&playlist.ID, &playlist.Name, &playlist.UserId, &playlist.IsPrivate)
		if err != nil {
			return nil, err
		}
		playlists = append(playlists, playlist)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return &playlists, nil

}

func (p *Postgres) GetAllSongsInPlaylistById(playlistId int64) (*[]models.Song, models.Playlist, error) {
	query := `
		SELECT s.id, s.title, s.image, s.file, s.duration, s.user_id, s.album_id, s.category
		FROM songs s
		INNER JOIN playlists_songs ps ON s.id = ps.song_id
		WHERE ps.playlist_id = $1
	`

	rows, err := p.db.Query(query, playlistId)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var songs []models.Song
	var playlist models.Playlist

	for rows.Next() {
		var song models.Song
		err := rows.Scan(&song.ID, &song.Title, &song.Image, &song.File, &song.Duration, &song.UserId, &song.AlbumId, &song.Category)
		if err != nil {
			return nil, playlist, err
		}

		songs = append(songs, song)
	}

	if err := rows.Err(); err != nil {
		return nil, playlist, err
	}

	playlist, err = p.GetPlaylistById(playlistId)
	if err != nil {
		log.Println(err)
	}

	return &songs, playlist, nil
}

func (p *Postgres) CreateNewPlaylist(playlist *models.PlaylistQuery) (int64, error) {
	var playlistId int64

	query := `
		INSERT INTO playlists (name, user_id, is_private)
		VALUES ($1, $2, $3)
		RETURNING id
	`
	err := p.db.QueryRow(
		query,
		playlist.Name,
		playlist.UserId,
		playlist.IsPrivate,
	).Scan(&playlistId)

	if err != nil {
		log.Println(err)
	}

	return playlistId, nil

}

func (p *Postgres) AddSongToPlaylist(playlistId int64, songId int64) error {
	query := `
	INSERT INTO playlists_songs (playlist_id, song_id)
	VALUES ($1, $2)
	`
	_, err := p.db.Exec(query, playlistId, songId)
	if err != nil {
		return err
	}

	return nil
}

func (p *Postgres) RemovePlaylistById(playlistId int64) error {
	query := `DELETE FROM playlists WHERE id = $1`

	_, err := p.db.Exec(query, playlistId)
	if err != nil {
		log.Println(err)
	}

	return nil
}

// User
func (Postgres) GetUserById(userId int64) *models.User {
	panic("unimplemented")
}

func (Postgres) GetAllUsers() *[]models.User {
	panic("unimplemented")
}

func (p *Postgres) CreateNewUserAccount(user *models.UserQuery) (int64, error) {
	var userId int64

	query := `
		INSERT INTO users (name, image)
		VALUES ($1, $2)
		RETURNING id
	`
	err := p.db.QueryRow(
		query,
		user.Name,
		user.Image,
	).Scan(&userId)

	if err != nil {
		log.Println(err)
	}

	return userId, nil
}

func (Postgres) RemoveUserById(userId int64) models.User {
	panic("")
}
