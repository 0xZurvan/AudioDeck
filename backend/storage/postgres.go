package storage

import "github.com/0xZurvan/Kiron2X/models"

type Postgres struct{}

func NewPostgres() *Postgres {
	return &Postgres{}
}

// GetAlbums implements Storage.
func (Postgres) GetAlbums() *[]models.Album {
	panic("unimplemented")
}

// GetAlbums implements Storage.
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

// GetAlbums implements Storage.
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

// AddAlbum implements Storage.
func (Postgres) AddAlbum(album *models.Album) {
	panic("unimplemented")
}

// Delete albums implements Storage.
func (Postgres) Remove() {
	panic("unimplemented")
}
