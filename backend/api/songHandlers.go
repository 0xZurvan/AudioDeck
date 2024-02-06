package api

import (
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetSongById(c *gin.Context) {
	id := c.Param("id")

	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	song, err := s.store.GetSongById(songId)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"Song id response": song})
}

func (s *APIServer) handleGetAllSongsInAlbumById(c *gin.Context) {
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songs, album, err := s.store.GetAllSongsInAlbumById(albumId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := gin.H{
		"songs": songs,
		"album": album,
	}

	c.JSON(http.StatusOK, gin.H{"Full album response": response})

}

func (s *APIServer) handleAddNewSongToAlbum(c *gin.Context) {
	var newSong models.SongQuery

	if err := c.BindJSON(&newSong); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songId, err := s.store.AddNewSongToAlbum(&newSong)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"New song added successfully with id:": songId})
}

func (s *APIServer) handleRemoveSongById(c *gin.Context) {
	id := c.Param("id")

	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemoveSongById(songId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"Successfully removed song id:": songId})
}
