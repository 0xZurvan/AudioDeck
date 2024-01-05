package storage

import "github.com/0xZurvan/Kiron2X/types"

type Postgres struct{}

func NewPostgres() *Postgres {
	return &Postgres{}
}

// GetAlbums implements Storage.
func (Postgres) GetAlbums() *[]types.Album {
	panic("unimplemented")
}

// GetAlbums implements Storage.
func (Postgres) GetAlbum(name string) *types.Album {
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
func (Postgres) GetMusic(name string) *types.Music {
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
func (Postgres) AddAlbum(album *types.Album) {
	panic("unimplemented")
}

// Delete albums implements Storage.
func (Postgres) Remove() {
	panic("unimplemented")
}
