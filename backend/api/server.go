package api

import (
	"github.com/0xZurvan/AudioDeck/storage"
	"github.com/gin-contrib/cors"
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

func (server *APIServer) Start() error {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Configure CORS middleware to allow requests only from http://localhost:3000/
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Origin", "Content-Type", "Accept"},
	}))

	// Albums endpoints
	router.GET("/albums", server.handleGetAllAlbums)
	router.GET("/albums/:id", server.handleGetAlbumById)
	router.GET("/albums/song/:id", server.handleGetAlbumBySongId)
	router.GET("/albums/user/:id", server.handleGetAlbumsFromUserId)
	router.POST("/albums", server.handleCreateNewAlbum)
	router.POST("/albums/songs", server.handleAddSongsToAlbumId)
	router.DELETE("/albums/:id", server.handleRemoveAlbumById)

	// Songs endpoints
	router.GET("/songs/:id", server.handleGetSongById)
	router.GET("/songs/album/:id", server.handleGetAllSongsInAlbumById)
	router.POST("/songs", server.handleAddNewSongToAlbum)
	router.DELETE("/songs/:id", server.handleRemoveSongById)

	// Playlists endpoints
	router.GET("/playlists/:id", server.handleGetPlaylistById)
	router.GET("/playlists", server.handleGetAllPlaylists)
	router.GET("/playlists/user/:id", server.handleGetAllPlaylistsFromUserId)
	router.GET("/playlists/songs/:id", server.handleGetAllSongsInPlaylistById)
	router.POST("/playlists", server.handleCreateNewPlaylist)
	router.POST("/playlists/song", server.handleAddSongToPlaylist)
	router.DELETE("/playlists/song", server.handleRemoveSongFromPlaylist)
	router.DELETE("/playlists/:id", server.handleRemovePlaylistById)

	// Users endpoints
	router.GET("/users/:name", server.handleGetUserByName)
	router.GET("/users", server.handleGetAllUsers)
	router.PUT("/users/name/:id", server.handleUpdateUserName)
	router.PUT("/users/password/:id", server.handleUpdateUserPassword)
	router.DELETE("/users/:id", server.handleRemoveUserById)

	// Auth endpoints
	router.POST("/auth/sign-up", server.handleSignUp)
	router.POST("/auth/sign-in", server.handleSignIn)

	return router.Run(server.listenAddr)
}
