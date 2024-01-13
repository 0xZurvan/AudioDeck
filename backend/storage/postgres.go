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
func (p *Postgres) GetAllAlbums() *[]models.AlbumQuery {
	albums := []models.AlbumQuery{}

	rows, err := p.db.Query("SELECT title, image, artist_id, songs, category FROM albums")
	if err != nil {
		log.Fatal(err)
	}

	defer rows.Close()

	var title string
	var image []byte
	var artist_id int64
	var songs []models.Music
	var category string

	for rows.Next() {
		err := rows.Scan(&title, &image, &artist_id, &songs, &category)
		if err != nil {
			log.Fatal(err)
		}

		albums = append(albums, models.AlbumQuery{
			Title:    title,
			Image:    image,
			ArtistId: artist_id,
			Songs:    songs,
			Category: category,
		})
	}

	return &albums

}

func (p *Postgres) GetAlbumById(albumId int64) (models.AlbumQuery, error) {
	var album models.AlbumQuery
	query := `SELECT * FROM albums WHERE id = $1`

	row := p.db.QueryRow(query, albumId)
	if err := row.Scan(&album.Title, &album.Image, &album.ArtistId, &album.Category); err != nil {
		if err == sql.ErrNoRows {
			return album, err
		}

		return album, err
	}

	return album, nil

}

func (p *Postgres) CreateNewAlbum(album *models.AlbumQuery) (int64, error) {
	query := `INSERT INTO albums (title, image, artist_id, songs, category) VALUES ($1, $2, $3, $4, $5)`

	result, err := p.db.Exec(query, &album.Title, &album.Image, &album.ArtistId, &album.Songs, &album.Category)
	if err != nil {
		return 0, fmt.Errorf("addAlbum: %v", err)
	}

	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("addAlbum: %v", err)
	}

	return id, nil

}

func (p *Postgres) RemoveAlbumById(albumId int64) error {
	query := `DELETE FROM albums WHERE id = $1`

	_, err := p.db.Exec(query, albumId)
	if err != nil {
		log.Fatal(err)
	}

	return err

}

// Music
func (p *Postgres) GetMusicById(albumId int64) (models.MusicQuery, error) {
	var music models.MusicQuery

	query := `SELECT * FROM songs WHERE id = $1`
	row := p.db.QueryRow(query, albumId)
	if err := row.Scan(&music.Title, &music.Image, &music.File, &music.Duration, &music.ArtistId, &music.Category); err != nil {
		if err == sql.ErrNoRows {
			return music, err
		}

		return music, err
	}

	return music, nil
}

func (Postgres) AddNewMusicToAlbum(musicId int64) *models.Music {
	panic("unimplemented")
	/*
			 for _, a := range albums {
		        if a.Name == id {
		            c.IndentedJSON(http.StatusOK, a)
		            return
		        }
		    }
		    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
	*/
}

func (Postgres) RemoveMusicById(musicId int64) *models.Music {
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

// Artist
func (Postgres) GetAllArtist() *[]models.Artist {
	panic("unimplemented")
}

func (Postgres) GetArtistById(artistId int64) *models.Artist {
	panic("unimplemented")
}

func (Postgres) CreateNewArtistAccount(artist *models.Artist) *models.Artist {
	panic("")
}

func (Postgres) RemoveArtistById(artistId int64) *models.Artist {
	panic("")
}

func (Postgres) GetListenerById(listener int64) *models.Listeners {
	panic("")
}

func (Postgres) CreateNewListerAccount(listener *models.Listeners) *models.Listeners {
	panic("")
}

func (Postgres) RemoveListenerById(listenerId int64) *models.Listeners {
	panic("")
}
