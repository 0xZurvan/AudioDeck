package storage

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/0xZurvan/AudioDeck/models"
	_ "github.com/lib/pq"
)

type Postgres struct {
	db *sql.DB
}

func InitDB(connStr string) (*Postgres, error) {
	// connStr := "postgres://postgres:78953kiron2x@host.docker.internal:5432/kiron2xDB?sslmode=disable"
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
	query := `SELECT id, title, user_name, user_id, category FROM albums`

	rows, err := p.db.Query(query)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var albums []models.Album

	for rows.Next() {
		var album models.Album
		err := rows.Scan(&album.ID, &album.Title, &album.UserName, &album.UserId, &album.Category)
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
	query := `SELECT id, title, user_name, user_id, category FROM albums WHERE id = $1`

	row := p.db.QueryRow(query, albumId)
	if err := row.Scan(&album.ID, &album.Title, &album.UserName, &album.UserId, &album.Category); err != nil {
		if err == sql.ErrNoRows {
			return album, err
		}

		return album, err

	}

	return album, nil
}

func (p *Postgres) GetAlbumBySongId(songId int64) (models.Album, error) {
	query := `
		SELECT album.id, album.title, album.user_name, album.user_id, album.category
		FROM albums album
		JOIN songs song ON album.id = song.album_id
		WHERE song.id = $1
		LIMIT 1
	`

	var album models.Album
	err := p.db.QueryRow(query, songId).
		Scan(&album.ID, &album.Title, &album.UserName, &album.UserId, &album.Category)

	if err != nil {
		return album, err
	}

	return album, nil
}

func (p *Postgres) GetAlbumsFromUserId(userId int64) (*[]models.Album, error) {
	query := `
		SELECT id, title, user_name, user_id, category
		FROM albums
		WHERE user_id = $1
	`

	rows, err := p.db.Query(query, userId)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var albums []models.Album

	for rows.Next() {
		var album models.Album
		err := rows.Scan(&album.ID, &album.Title, &album.UserName, &album.UserId, &album.Category)
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

func (p *Postgres) CreateNewAlbum(album *models.AlbumQuery) (int64, error) {
	var albumId int64

	query := `
	INSERT INTO albums (title, user_name, user_id, category) 
	VALUES ($1, $2, $3, $4)
	RETURNING id
	`
	err := p.db.QueryRow(
		query,
		album.Title,
		album.UserName,
		album.UserId,
		album.Category,
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
	SELECT id, title, user_id, album_id 
	FROM songs 
	WHERE id = $1
	`

	row := p.db.QueryRow(query, songId)
	if err := row.Scan(&song.ID, &song.Title, &song.UserId, &song.AlbumId); err != nil {
		return song, err
	}

	return song, nil
}

func (p *Postgres) GetAllSongsInAlbumById(albumId int64) (*[]models.Song, models.Album, error) {
	query := `
	SELECT id, title, user_id, album_id
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
		err := rows.Scan(&song.ID, &song.Title, &song.UserId, &song.AlbumId)
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
	INSERT INTO songs (title, user_id, album_id)
	VALUES ($1, $2, $3)
	RETURNING id
	`
	err := p.db.QueryRow(
		songQuery,
		song.Title,
		song.UserId,
		song.AlbumId,
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
	query := `SELECT id, name, user_id FROM playlists WHERE id = $1`

	row := p.db.QueryRow(query, playlistId)
	if err := row.Scan(&playlist.ID, &playlist.Name, &playlist.UserId); err != nil {
		if err == sql.ErrNoRows {
			return playlist, err
		}

		return playlist, err
	}

	return playlist, nil

}

func (p *Postgres) GetAllPlaylists() (*[]models.Playlist, error) {
	query := `SELECT id, name, user_id FROM playlists`

	rows, err := p.db.Query(query)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var playlists []models.Playlist

	for rows.Next() {
		var playlist models.Playlist
		err := rows.Scan(&playlist.ID, &playlist.Name, &playlist.UserId)
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

func (p *Postgres) GetAllPlaylistsFromUserId(userId int64) (*[]models.Playlist, error) {
	query := `SELECT id, name, user_id FROM playlists WHERE user_id = $1`

	rows, err := p.db.Query(query, userId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var playlists []models.Playlist

	for rows.Next() {
		var playlist models.Playlist
		err := rows.Scan(&playlist.ID, &playlist.Name, &playlist.UserId)
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
		SELECT s.id, s.title, s.user_id, s.album_id
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
		err := rows.Scan(&song.ID, &song.Title, &song.UserId, &song.AlbumId)
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
		INSERT INTO playlists (name, user_id)
		VALUES ($1, $2)
		RETURNING id
	`
	err := p.db.QueryRow(
		query,
		playlist.Name,
		playlist.UserId,
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

func (p *Postgres) RemoveSongFromPlaylist(playlistId int64, songId int64) error {
	query := `
	DELETE FROM playlists_songs
	WHERE playlist_id = $1 AND song_id = $2
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
func (p *Postgres) GetUserByName(userName string) (models.UserQuery, error) {
	query := `SELECT id, name FROM users WHERE name = $1`

	var user models.UserQuery

	row := p.db.QueryRow(query, userName)
	if err := row.Scan(&user.ID, &user.Name); err != nil {
		if err == sql.ErrNoRows {
			return user, err
		}
		return user, err
	}

	return user, nil
}

func (p *Postgres) GetAllUsers() (*[]models.UserQuery, error) {
	query := `SELECT id, name FROM users`

	rows, err := p.db.Query(query)
	if err != nil {
		log.Println(err)
	}

	defer rows.Close()

	var users []models.UserQuery

	for rows.Next() {
		var user models.UserQuery
		err := rows.Scan(&user.ID, &user.Name)
		if err != nil {
			return nil, err
		}

		users = append(users, user)
	}

	return &users, nil

}

func (p *Postgres) SignUp(credentials *models.Credentials) (models.UserQuery, error) {
	var user models.UserQuery

	query := `
	INSERT INTO users (name, password)
	VALUES ($1, $2)
	RETURNING id, name
	`
	err := p.db.QueryRow(
		query,
		credentials.Name,
		credentials.Password,
	).Scan(&user.ID, &user.Name)

	if err != nil {
		return user, fmt.Errorf("server error: %s", err)
	}

	return user, nil
}

func (p *Postgres) SignIn(credentials *models.Credentials) (models.UserQuery, error) {
	var user models.UserQuery

	query := `
	SELECT id, name FROM users
	WHERE name = $1 AND password = $2
	`

	err := p.db.QueryRow(
		query,
		credentials.Name,
		credentials.Password,
	).Scan(&user.ID, &user.Name)

	if err != nil {
		if err == sql.ErrNoRows {
			return user, fmt.Errorf("invalid username or password")
		}
		return user, fmt.Errorf("database error: %s", err)
	}

	return user, nil
}

func (p *Postgres) UpdateUserName(userId int64, newName string) error {
	query := "UPDATE users SET name = $1 WHERE id = $2"
	_, err := p.db.Exec(query, newName, userId)
	if err != nil {
		log.Println("Error updating user name:", err)
		return err
	}
	return nil
}

func (p *Postgres) UpdateUserPassword(userId int64, newPassword string) error {
	query := "UPDATE users SET password = $1 WHERE id = $2"
	_, err := p.db.Exec(query, newPassword, userId)
	if err != nil {
		log.Println("Error updating user password:", err)
		return err
	}

	return nil
}

func (p *Postgres) RemoveUserById(userId int64) error {
	query := `DELETE FROM playlists WHERE id = $1`
	_, err := p.db.Exec(query, userId)
	if err != nil {
		log.Println(err)
	}

	return nil
}
