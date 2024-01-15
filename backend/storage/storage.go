package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// Migrations
	CreateUsersTable()
	CreateAlbumsTable()
	CreateSongsTable()
	CreatePlaylistsTable()

	// album
	GetAllAlbums() (*[]models.AlbumQuery, error)
	GetAlbumById(albumId int64) (models.AlbumQuery, error)
	CreateNewAlbum(album *models.AlbumQuery, songs *[]models.SongQuery) (int64, error)
	RemoveAlbumById(albumId int64) error
	// Song
	GetFullAlbumById(albumId int64) (*[]models.SongQuery, models.AlbumQuery, error)
	GetSongById(SongName int64) (models.SongQuery, error)
	GetAlbumBySongId(songId int64) (*models.AlbumQuery, error)
	AddNewSongToAlbum(albumId int64, song *models.SongQuery) (int64, error)
	RemoveSongById(songId int64) error
	// Playlist
	GetAllPlaylist() *[]models.Playlist
	GetPlaylistById(playlistId int64) *models.Playlist
	CreateNewPlaylist(newPlaylist *models.Playlist) *models.Playlist
	RemovePlaylistById(playlistId int64)
	// User
	GetAllUsers() *[]models.User
	GetUserById(userId int64) *models.User
	CreateNewUserAccount(user *models.User) models.User
	RemoveUserById(userId int64) models.User

}
