package api

import (
	"github.com/0xZurvan/Kiron2X/storage"
	"github.com/gin-gonic/gin"
)

type APIServer struct {
	listenAddr string
	store      storage.Storage
}

func NewAPIServer(listenAddr string, store storage.Storage) *APIServer {
	return &APIServer{
		listenAddr: listenAddr,
		store:      store,
	}
}

func (s *APIServer) Start() error {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Create Tables
	s.store.CreateUsersTable()
	s.store.CreateAlbumsTable()
	s.store.CreateSongsTable()
	s.store.CreatePlaylistsTable()
	s.store.CreatePlaylistsSongsTable()

	// Albums endpoints
	router.GET("/albums", s.handleGetAllAlbums)
	router.GET("/albums/:id", s.handleGetAlbumById)
	router.GET("/albums/song/:id", s.handleGetAlbumBySongId)
	router.GET("/albums/user/:id", s.handleGetAlbumsFromUserId)
	router.POST("/albums", s.handleCreateNewAlbum)
	router.POST("/albums/songs", s.handleAddSongsToAlbumId)
	router.DELETE("/albums/:id", s.handleRemoveAlbumById)

	// Songs endpoints
	router.GET("/songs/:id", s.handleGetSongById)
	router.GET("/songs/album/:id", s.handleGetAllSongsInAlbumById)
	router.POST("/songs", s.handleAddNewSongToAlbum)
	router.DELETE("/songs/:id", s.handleRemoveSongById)

	// Playlists endpoints
	router.GET("/playlists/:id", s.handleGetPlaylistById)
	router.GET("/playlists", s.handleGetAllPlaylists)
	router.GET("/playlists/songs/:id", s.handleGetAllSongsInPlaylistById)
	router.POST("/playlists", s.handleCreateNewPlaylist)
	router.POST("/playlists/song", s.handleAddSongToPlaylist)
	router.DELETE("/playlists/:id", s.handleRemovePlaylistById)

	// Users endpoints
	router.GET("/users/:name", s.handleGetUserByName)
	router.GET("/users", s.handleGetAllUsers) 
	router.PUT("/users/name/:id", s.handleUpdateUserName) 
	router.PUT("/users/password/:id", s.handleUpdateUserPassword) 
	router.PUT("/users/image/:id", s.handleUpdateUserImage) 
	router.POST("/users", s.handleCreateNewUserAccount)
	router.DELETE("/users/:id", s.handleRemoveUserById)

	return router.Run(s.listenAddr)
}
