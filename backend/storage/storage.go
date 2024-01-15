package storage

import "github.com/0xZurvan/Kiron2X/models"

type Storage interface {
	// Migrations
	CreateUsersTable()
	CreateAlbumsTable()
	CreateSongsTable()
	CreatePlaylistsTable()
	CreatePlaylistsSongsTable()

	// albums
	/**
		1. [x] /api/albums/:id - type GET - GetAlbumById
		2. [x] /api/albums - type GET - GetAllAlbums
	  3. [x] /api/albums/song/:id - type GET - GetAlbumBySongId
	  4. [x] /api/albums - type POST - CreateNewAlbum
	  5. [x] /api/albums/:id - type DELETE - RemoveAlbumById
	**/
	GetAlbumById(albumId int64) (models.Album, error)
	GetAllAlbums() (*[]models.Album, error)
	GetAlbumBySongId(songId int64) (models.Album, error)
	CreateNewAlbum(album *models.AlbumQuery, songs *[]models.SongQuery) (int64, error)
	RemoveAlbumById(albumId int64) error
	// songs
	/**
		1. [x] /api/songs/:id - type GET - GetSongById
		2. [x] /api/songs/album/:id - type GET - GetAllSongsInAlbumById
	  3. [x] /api/songs - type POST - AddNewSongToAlbum
	  4. [x] /api/songs/:id - type DELETE - RemoveSongById
	**/
	GetSongById(songId int64) (models.Song, error)
	GetAllSongsInAlbumById(albumId int64) (*[]models.Song, models.Album, error)
	AddNewSongToAlbum(song *models.SongQuery) (int64, error)
	RemoveSongById(songId int64) error
	// playlists
	/**
		1. [x] /api/playlists/:id - type GET - GetPlaylistById
		2. [x] /api/playlists/ - type GET - GetAllPlaylist
	  3. [x] /api/playlists/songs/:id - type GET - GetAllSongsInPlaylistById
	  4. [x] /api/playlists - type POST - CreateNewPlaylist
	  4. [x] /api/playlists/add-song - type POST - AddSongToPlaylist
	  5. [x] /api/playlists/:id - type DELETE - RemovePlaylistById
	**/
	GetPlaylistById(playlistId int64) (models.Playlist, error)
	GetAllPlaylists() (*[]models.Playlist, error)
	GetAllSongsInPlaylistById(playlistId int64) (*[]models.Song, models.Playlist, error)
	CreateNewPlaylist(newPlaylist *models.Playlist) (int64, error)
	AddSongToPlaylist(playlistId int64, songId int64) error
	RemovePlaylistById(playlistId int64) error
	// users
	/**
		1. [] /api/users/:id - type GET - GetUserById
		2. [] /api/users/ - type GET - GetAllUsers
	  3. [] /api/users - type POST - CreateNewUserAccount
	  4. [] /api/users/:id - type DELETE - RemoveUserById
	**/
	GetUserById(userId int64) *models.User
	GetAllUsers() *[]models.User
	CreateNewUserAccount(user *models.User) models.User
	RemoveUserById(userId int64) models.User

}
