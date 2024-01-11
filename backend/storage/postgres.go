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

func (p *Postgres) CreateUserTable() {
	query := `CREATE TABLE IF NOT EXISTS listeners (
		id SERIAL PRIMARY KEY,
		name VARCHAR(80) NOT NULL,
		image bytea,
		playlist jsonb
	)`

	_, err := p.db.Exec(query)

	fmt.Println("New user table created")

	if err != nil {
		log.Fatal(err)
	}
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
