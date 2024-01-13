package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// Migrations
	CreateListenersTable()
	CreateArtistsTable()
	CreateAlbumsTable()
	// album
	GetAllAlbums() *[]models.Album
	GetAlbum(albumName string) *models.Album
	CreateAlbum(album *models.Album)
	RemoveAlbum(albumName string)
	// Music
	GetMusic(musicName string) *models.Music
	AddNewMusic(albumName string) *models.Music
	RemoveMusic(musicName string)
	// Playlist
	GetAllPlaylist() *[]models.Playlist
	GetPlaylist(playlistName string) *models.Playlist
	CreatePlaylist(newPlaylist *models.Playlist)
	RemovePlaylist(playlistName string)
	//Artist
	GetAllArtist() *[]models.Artist
	GetArtist(artistName *models.Artist) *models.Artist
}
