package storage

import (
	"github.com/0xZurvan/Kiron2X/models"
	"database/sql"
)

type Postgres struct{
	db *sql.DB
}

func NewPostgres() *Postgres {
	return &Postgres{}
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