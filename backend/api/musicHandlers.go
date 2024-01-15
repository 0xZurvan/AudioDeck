package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetMusicById(c *gin.Context) {
	id := c.Param("id")

	// Convert the string ID to int64
	musicID, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	music, err := s.store.GetMusicById(musicID)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, music)
}

func (s *APIServer) handleAddNewMusicToAlbum(c *gin.Context) {
	var newMusic models.MusicQuery
	id := c.Param("id")
	
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil{
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
	}

	if err := c.BindJSON(&newMusic); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	musicId, err := s.store.AddNewMusicToAlbum(albumId, &newMusic)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, musicId)
}
