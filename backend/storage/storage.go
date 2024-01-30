package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// migrations
	CreateUsersTable()
	CreateAlbumsTable()
	CreateSongsTable()
	CreatePlaylistsTable()
	CreatePlaylistsSongsTable()

	// albums
	GetAlbumById(albumId int64) (models.Album, error)
	GetAllAlbums() (*[]models.Album, error)
	GetAlbumBySongId(songId int64) (models.Album, error)
	GetAlbumsFromUserId(userId int64) (*[]models.Album, error)
	CreateNewAlbum(album *models.AlbumQuery) (int64, error)
	AddSongsToAlbumId(songs *[]models.SongQuery) error
	RemoveAlbumById(albumId int64) error

	// songs
	GetSongById(songId int64) (models.Song, error)
	GetAllSongsInAlbumById(albumId int64) (*[]models.Song, models.Album, error)
	AddNewSongToAlbum(song *models.SongQuery) (int64, error)
	RemoveSongById(songId int64) error

	// playlists
	GetPlaylistById(playlistId int64) (models.Playlist, error)
	GetAllPlaylists() (*[]models.Playlist, error)
	GetAllSongsInPlaylistById(playlistId int64) (*[]models.Song, models.Playlist, error)
	CreateNewPlaylist(newPlaylist *models.PlaylistQuery) (int64, error)
	AddSongToPlaylist(playlistId int64, songId int64) error
	RemovePlaylistById(playlistId int64) error

	// users
	GetUserByName(userName string) (models.UserQuery, error)
	GetAllUsers() (*[]models.UserQuery, error)
	CreateNewUserAccount(user *models.Credentials) (int64, error)
	UpdateUserName(userID int64, name string) error
	UpdateUserPassword(userID int64, password string) error
	UpdateUserImage(userID int64, image []byte) error
	RemoveUserById(userId int64) error
}
