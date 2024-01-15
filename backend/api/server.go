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
		s.store.CreateListenersTable()

		// Albums
		albums := router.Group("/albums")
		albums.GET("/api/album", s.handleGetAllAlbums)
		albums.GET("/api/album/:id", s.handleGetAlbumById)
		albums.POST("/api/album", s.handleGetAlbumById)

		// Musics
		music := router.Group("/music")
		music.GET("/api/album/music/:id", s.handleGetSongById)
		music.GET("/api/album/:id/music", s.handleAddNewSongToAlbum)

		return router.Run(s.listenAddr)
	}
