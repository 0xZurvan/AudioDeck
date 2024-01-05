package storage

import "github.com/0xZurvan/Kiron2X/types"

type Postgres struct{}

func NewPostgress() *Postgres {
	return &Postgres{}
}

// AddAlbum implements Storage.
func (Postgres) AddAlbum(album *types.Album) {
	panic("unimplemented")
}

// GetAlbums implements Storage.
func (Postgres) GetAlbums() *[]types.Album {
	panic("unimplemented")
}



