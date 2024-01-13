package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// Migrations
	CreateListenersTable()
	CreateArtistsTable()
	CreateAlbumsTable()
	CreateMusicsTable()
	CreatePlaylistsTable()
	// album
	GetAllAlbums() *[]models.AlbumQuery
	GetAlbumById(albumId int64) (models.Album, error)
	CreateNewAlbum(album *models.Album) *models.Album
	RemoveAlbumById(albumId int64)
	// Music
	GetMusicById(musicName int64) *models.Music
	AddNewMusicToAlbum(albumId int64) *models.Music
	RemoveMusicById(musicId int64) *models.Music
	// Playlist
	GetAllPlaylist() *[]models.Playlist
	GetPlaylistById(playlistId int64) *models.Playlist
	CreateNewPlaylist(newPlaylist *models.Playlist) *models.Playlist
	RemovePlaylistById(playlistId int64)
	// Artist
	GetAllArtist() *[]models.Artist
	GetArtistById(artistId int64) *models.Artist
	CreateNewArtistAccount(artist *models.Artist) *models.Artist
	RemoveArtistById(artistId int64) *models.Artist
	// Listener
	GetListenerById(listener int64) *models.Listeners
	CreateNewListerAccount(listener *models.Listeners) *models.Listeners
	RemoveListenerById(listenerId int64) *models.Listeners
}
