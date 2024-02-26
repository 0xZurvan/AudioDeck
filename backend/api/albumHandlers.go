package api

import (
	"net/http"
	"strconv"

	"github.com/0xZurvan/AudioDeck/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetAllAlbums(c *gin.Context) {
	albums, err := s.store.GetAllAlbums()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, albums)
}

func (s *APIServer) handleGetAlbumById(c *gin.Context) {
	id := c.Param("id")

	// Convert the string ID to int64
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	album, err := s.store.GetAlbumById(albumId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, album)
}

func (s *APIServer) handleGetAlbumBySongId(c *gin.Context) {
	id := c.Param("id")
	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	album, err := s.store.GetAlbumBySongId(songId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, album)
}

func (s *APIServer) handleCreateNewAlbum(c *gin.Context) {
	var newAlbum models.AlbumQuery

	err := c.Bind(&newAlbum)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	albumId, err := s.store.CreateNewAlbum(&newAlbum)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"New album created successfully with id:": albumId})
}

func (s *APIServer) handleAddSongsToAlbumId(c *gin.Context) {
	var newSongs []models.SongQuery

	if err := c.BindJSON(&newSongs); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := s.store.AddSongsToAlbumId(&newSongs)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Successfully songs added to album"})
}

func (s *APIServer) handleRemoveAlbumById(c *gin.Context) {
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemoveAlbumById(albumId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}

	c.JSON(http.StatusOK, gin.H{"Successfully removed song id:": albumId})
}
