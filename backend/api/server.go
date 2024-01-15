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

		// Albums
		albums := router.Group("/albums")
		albums.GET("/api/album", s.handleGetAllAlbums)
		albums.GET("/api/album/:id", s.handleGetAlbumById)
		albums.GET("/api/album", s.handleGetAlbumById)

		// Song
		music := router.Group("/song")
		music.GET("/api/album/song/:id", s.handleGetSongById)
		music.POST("/api/album/song", s.handleAddNewSongToAlbum)

		return router.Run(s.listenAddr)
	}
