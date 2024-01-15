package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// Migrations
	CreateListenersTable()
	CreateArtistsTable()
	CreateAlbumsTable()
	CreateSongsTable()
	CreatePlaylistsTable()
	CreateAlbumSongsTable()
	// album
	GetAllAlbums() *[]models.AlbumQuery
	GetAlbumById(albumId int64) (models.AlbumQuery, error)
	CreateNewAlbum(album *models.AlbumQuery) (int64, error)
	RemoveAlbumById(albumId int64) error
	// Music
	GetMusicById(musicName int64) (models.MusicQuery, error)
	AddNewMusicToAlbum(albumId int64, music *models.MusicQuery) (int64, error)
	RemoveMusicById(musicId int64) error
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
