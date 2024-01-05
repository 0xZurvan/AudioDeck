package api

import (
	"net/http"

	"github.com/0xZurvan/Kiron2X/storage"
	"github.com/0xZurvan/Kiron2X/types"
	"github.com/gin-gonic/gin"
)

type Server struct {
	listenAddr string
	store      storage.Storage
}

func NewServer(listenAddr string, store storage.Storage) *Server {
	return &Server{
		listenAddr: listenAddr,
		store:      store,
	}
}

func (s *Server) Start() error {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	// Albums
	router.GET("/albums", s.handleGetAlbums)
	router.GET("/albums/:name", s.handleGetAlbum)
	router.POST("/albums", s.handleAddAlbums)

	// Musics
	router.GET("/music/:name", s.handleGetMusic)

	return router.Run(s.listenAddr)
}

func (s *Server) handleGetAlbums(c *gin.Context) {
	albums := s.store.GetAlbums()
	c.IndentedJSON(http.StatusOK, albums)
}

func (s *Server) handleGetAlbum(c *gin.Context) {
	name := c.Param("name")
	album := s.store.GetAlbum(name)
	c.IndentedJSON(http.StatusOK, album)
}

func (s *Server) handleGetMusic(c *gin.Context) {
	name := c.Param("name")
	music := s.store.GetMusic(name)
	c.IndentedJSON(http.StatusOK, music)
}

func (s *Server) handleAddAlbums(c *gin.Context) {
	var newAlbum types.Album

	if err := c.BindJSON(&newAlbum); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	s.store.AddAlbum(&newAlbum)

	c.IndentedJSON(http.StatusCreated, newAlbum)
}
