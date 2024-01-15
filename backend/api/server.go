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
		albums := router.Group("/albums")
		albums.GET("/api/albums", s.handleGetAllAlbums)
		albums.GET("/api/albums/:id", s.handleGetAlbumById)
		albums.GET("/api/albums/song/:id", s.handleGetAlbumBySongId)
		albums.POST("/api/albums", s.handleCreateNewAlbum)
		albums.DELETE("/api/albums/:id", s.handleRemoveAlbumById)

		// Songs endpoints
		songs := router.Group("/songs")
		songs.GET("/api/songs/:id ", s.handleGetSongById)
		songs.GET("/api/songs/album/:id", s.handleGetAllSongsInAlbumById)
		songs.POST("/api/songs", s.handleAddNewSongToAlbum)
		songs.DELETE("/api/songs/:id", s.handleRemoveSongById)

		return router.Run(s.listenAddr)
	}
