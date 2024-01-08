package storage

import (
	"database/sql"

	"github.com/0xZurvan/Kiron2X/models"
  _ "github.com/lib/pq"
)

type Postgres struct {
	db *sql.DB
}

func NewPostgres() (*Postgres, error) {
	connStr := "user=postgres dbname=kiron2xDB password=78953kiron2x sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		return nil, err
	}

	if err := db.Ping(); err != nil {
		return nil, err
	}

	return &Postgres{
		db: db,
	}, nil
}

// Album
func (Postgres) GetAllAlbums() *[]models.Album {
	panic("unimplemented")
}

func (Postgres) GetAlbum(name string) *models.Album {
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

func (Postgres) CreateAlbum(album *models.Album) {
	panic("unimplemented")
}

func (Postgres) RemoveAlbum(albumName string) {
	panic("unimplemented")
}

// Music
func (Postgres) GetMusic(name string) *models.Music {
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

func (Postgres) AddNewMusic(albumName string) *models.Music {
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

func (Postgres) RemoveMusic(musicName string) {
	panic("unimplemented")
}

// Playlist
func (Postgres) GetAllPlaylist() *[]models.Playlist {
	panic("unimplemented")
}

func (Postgres) GetPlaylist(playlistName string) *models.Playlist {
	panic("unimplemented")
}

func (Postgres) CreatePlaylist(newPlaylist *models.Playlist) {
	panic("unimplemented")
}

func (Postgres) RemovePlaylist(playlistName string) {
	panic("unimplemented")
}

// Artist
func (Postgres) GetAllArtist() *[]models.Artist {
	panic("unimplemented")
}

func (Postgres) GetArtist(artistName *models.Artist) *models.Artist {
	panic("unimplemented")
}
