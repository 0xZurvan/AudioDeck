package storage

import "github.com/0xZurvan/Kiron2X/types"

type Storage interface {
	GetAlbums() *[]types.Album
	AddAlbum(album *types.Album) 
}