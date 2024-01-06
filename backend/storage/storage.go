package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	GetAlbums() *[]models.Album
	GetAlbum(name string) *models.Album
	GetMusic(name string) *models.Music
	AddAlbum(album *models.Album)
	Remove()
}
