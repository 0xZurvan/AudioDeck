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
	songID, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	song, err := s.store.GetSongById(songID)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, song)
}

func (s *APIServer) handleAddNewSongToAlbum(c *gin.Context) {
	var newSong models.SongQuery
	id := c.Param("id")
	
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil{
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
	}

	if err := c.BindJSON(&newSong); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	SongId, err := s.store.AddNewSongToAlbum(albumId, &newSong)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, SongId)
}
