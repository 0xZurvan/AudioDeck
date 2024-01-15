package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetSongById(c *gin.Context) {
	id := c.Param("id")

	// Convert the string ID to int64
	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	song, err := s.store.GetSongById(songId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, song)
}

func (s *APIServer) handleAddNewSongToAlbum(c *gin.Context) {
	var newSong models.SongQuery

	if err := c.BindJSON(&newSong); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songId, err := s.store.AddNewSongToAlbum(&newSong)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, songId)
}
