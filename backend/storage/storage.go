package storage

import "github.com/0xZurvan/Kiron2X/types"

type Storage interface {
	GetAlbums() *[]types.Album
	GetAlbum(name string) *types.Album
	GetMusic(name string) *types.Music
	AddAlbum(album *types.Album)
	Remove()
}
