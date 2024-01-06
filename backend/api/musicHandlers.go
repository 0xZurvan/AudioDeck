package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
)


func (s *APIServer) handleGetMusic(c *gin.Context) {
	name := c.Param("name")
	music := s.store.GetMusic(name)
	c.IndentedJSON(http.StatusOK, music)
}

func (s *APIServer) handleAddMusic(c *gin.Context) {
	album := c.Param("name")
	music := s.store.AddNewMusic(album)
	c.IndentedJSON(http.StatusOK, music)
}