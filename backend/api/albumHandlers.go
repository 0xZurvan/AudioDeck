package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetAllAlbums(c *gin.Context) {
	albums, err := s.store.GetAllAlbums()
	if err != nil {
		log.Fatal(err)
	}

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

func (s *APIServer) handleGetAlbumBySongId(c *gin.Context) {
	id := c.Param("id")
	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	album, err := s.store.GetAlbumBySongId(songId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, album)
}

func (s *APIServer) handleCreateNewAlbum(c *gin.Context) {
	var newAlbum models.AlbumQuery
	var songs []models.SongQuery

	if err := c.BindJSON(&newAlbum); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		log.Fatal(err)
	}

	if err := c.BindJSON(&songs); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		log.Fatal(err)
	}

	albumId, err := s.store.CreateNewAlbum(&newAlbum, &songs)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusCreated, albumId)
}

func (s *APIServer) handleRemoveAlbumById(c *gin.Context) {
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemoveAlbumById(albumId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"Successfully removed song id:": albumId})
}
