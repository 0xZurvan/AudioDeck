package api

import (
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

	music := s.store.GetMusicById(musicID)
	c.IndentedJSON(http.StatusOK, music)
}

func (s *APIServer) handleAddNewMusicToAlbum(c *gin.Context) {
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil{
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
	}

	music := s.store.AddNewMusicToAlbum(albumId)
	c.IndentedJSON(http.StatusOK, music)
}
