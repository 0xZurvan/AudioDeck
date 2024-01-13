package storage

import (
	"database/sql"
	"fmt"

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
func (Postgres) GetAllAlbums() *[]models.Album {
	panic("unimplemented")
}

func (Postgres) GetAlbumById(albumId int64) *models.Album {
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

func (Postgres) CreateNewAlbum(album *models.Album) *models.Album {
	panic("unimplemented")
}

func (Postgres) RemoveAlbumById(albumId int64) {
	panic("unimplemented")
}

// Music
func (Postgres) GetMusicById(albumId int64) *models.Music {
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
