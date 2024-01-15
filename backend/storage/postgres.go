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
func (p *Postgres) GetAllAlbums() (*[]models.AlbumQuery, error) {
	query := `SELECT title, image, user_id, category FROM albums`

	rows, err := p.db.Query(query)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var albums []models.AlbumQuery

	for rows.Next() {
		var album models.AlbumQuery
		err := rows.Scan(&album.Title, &album.Image, &album.UserId, &album.Category)
		if err != nil {
			log.Fatal(err)
		}

		albums = append(albums, album)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return &albums, nil

}

// Do I need this method? Do I need to return all the musics related to the album?
// How does spotify handle it?
func (p *Postgres) GetAlbumById(albumId int64) (models.AlbumQuery, error) {
	var album models.AlbumQuery
	query := `SELECT * FROM albums WHERE id = $1`

	row := p.db.QueryRow(query, albumId)
	if err := row.Scan(&album.Title, &album.Image, &album.UserId, &album.Category); err != nil {
		if err == sql.ErrNoRows {
			return album, err
		}

		return album, err
	}

	return album, nil

}

func (p *Postgres) CreateNewAlbum(album *models.AlbumQuery, songs *[]models.SongQuery) (int64, error) {
	query := `
	INSERT INTO albums (title, image, user_id, category) 
	VALUES ($1, $2, $3, $4)
	`

	result, err := p.db.Exec(query, &album.Title, &album.Image, &album.UserId, &album.Category)
	if err != nil {
		return 0, err
	}

	albumId, err := result.LastInsertId()
	if err != nil {
		return 0, err
	}

	if songs != nil {
		for _, song := range *songs {
			_, err := p.AddNewSongToAlbum(albumId, &song)
			if err != nil {
				log.Fatal(err)
			}
		}
	}

	return albumId, nil

}

// Do I need to remove all the songs related to the album also
func (p *Postgres) RemoveAlbumById(albumId int64) error {
	query := `DELETE FROM albums WHERE id = $1`

	_, err := p.db.Exec(query, albumId)
	if err != nil {
		log.Fatal(err)
	}

	return err

}

// Song
func (p *Postgres) GetSongById(songId int64) (models.SongQuery, error) {
	var song models.SongQuery

	query := `SELECT * FROM songs WHERE id = $1`
	row := p.db.QueryRow(query, songId)
	if err := row.Scan(&song.Title, &song.Image, &song.File, &song.Duration, &song.UserId, &song.AlbumId, &song.Category); err != nil {
		if err == sql.ErrNoRows {
			return song, err
		}

		return song, err
	}

	return song, nil
}

func (p *Postgres) GetAllSongsInAlbumId(albumId int64) (*[]models.SongQuery, error) {
	query := `SELECT * FROM songs WHERE album_id = $1`

	rows, err := p.db.Query(query, albumId)
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var songs []models.SongQuery

	for rows.Next() {
		var song models.SongQuery
		err := rows.Scan(&song.Title, &song.Image, &song.File, &song.Duration, &song.UserId, &song.AlbumId, &song.Category)
		if err != nil {
			return nil, err
		}

		songs = append(songs, song)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return &songs, nil
}

func (p *Postgres) GetAlbumBySongId(songId int64) (*models.AlbumQuery, error) {
	query := `
		SELECT album.title, album.image, album.user_id, album.category
		FROM albums album
		JOIN songs song ON album.id = song.album_id
		WHERE song.id = $1
		LIMIT 1
	`

	var album models.AlbumQuery
	err := p.db.QueryRow(query, songId).
		Scan(&album.Title, &album.Image, &album.UserId, &album.Category)

	if err != nil {
		return nil, err
	}

	return &album, nil
}

func (p *Postgres) AddNewSongToAlbum(albumId int64, song *models.SongQuery) (int64, error) {
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
		log.Fatal(err)
	}

	return songId, nil

}

func (Postgres) RemoveSongById(musicId int64) error {
	panic("unimplemented")
}

// Playlist
func (Postgres) GetAllPlaylist() *[]models.Playlist {
	panic("unimplemented")
}

func (Postgres) GetPlaylistById(playlistId int64) *models.Playlist {
	panic("unimplemented")
}

func (Postgres) CreateNewPlaylist(newPlaylist *models.Playlist) *models.Playlist {
	panic("unimplemented")
}

func (Postgres) RemovePlaylistById(playlistId int64) {
	panic("unimplemented")
}

// User
func (Postgres) GetAllUsers() *[]models.User {
	panic("unimplemented")
}

func (Postgres) GetUserById(userId int64) *models.User {
	panic("unimplemented")
}

func (Postgres) CreateNewUserAccount(user *models.User) models.User {
	panic("")
}

func (Postgres) RemoveUserById(userId int64) models.User {
	panic("")
}
