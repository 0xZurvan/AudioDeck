package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetAllAlbums(c *gin.Context) {
	albums := s.store.GetAllAlbums()
	c.IndentedJSON(http.StatusOK, albums)
}

func (s *APIServer) handleGetAlbumById(c *gin.Context) {
	id := c.Param("id")

	// Convert the string ID to int64
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	album, err := s.store.GetAlbumById(albumId)
	if err != nil {
		log.Fatal(err)
	}
	
	c.IndentedJSON(http.StatusOK, album)
}

func (s *APIServer) handleCreateNewAlbum(c *gin.Context) {
	var newAlbum models.Album

	if err := c.BindJSON(&newAlbum); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	s.store.CreateNewAlbum(&newAlbum)

	c.IndentedJSON(http.StatusCreated, newAlbum)
}
