package api

import (
	"log"
	"net/http"
	"strconv"

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
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil{
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
	}

	musicId, err := s.store.AddNewMusicToAlbum(albumId)
	if err != nil {
		log.Fatal(err)
	}
	
	c.IndentedJSON(http.StatusOK, musicId)
}
