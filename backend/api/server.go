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
		albums.GET("/api/album", s.handleGetAlbums)
		albums.GET("/api/album/:name", s.handleGetAlbum)
		albums.POST("/api/album", s.handleAddAlbums)

		// Musics
		music := router.Group("/music")
		music.GET("/api/album/music/:name", s.handleGetMusic)
		music.GET("/api/album/:name/music", s.handleAddMusic)

		return router.Run(s.listenAddr)
	}
