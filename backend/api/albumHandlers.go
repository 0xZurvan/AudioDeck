package api

import (
	"net/http"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetAlbums(c *gin.Context) {
	albums := s.store.GetAllAlbums()
	c.IndentedJSON(http.StatusOK, albums)
}

func (s *APIServer) handleGetAlbum(c *gin.Context) {
	name := c.Param("name")
	album := s.store.GetAlbum(name)
	c.IndentedJSON(http.StatusOK, album)
}

func (s *APIServer) handleAddAlbums(c *gin.Context) {
	var newAlbum models.Album

	if err := c.BindJSON(&newAlbum); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	s.store.CreateAlbum(&newAlbum)

	c.IndentedJSON(http.StatusCreated, newAlbum)
}
