package api

import (
	"log"
	"net/http"
	// "strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)


func (s *APIServer) handleCreateNewUserAccount(c *gin.Context) {
	var newUser models.UserQuery

	if err := c.Bind(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userId, err := s.store.CreateNewUserAccount(&newUser)
	if err != nil {
		log.Fatal(err)
	}

	c.JSON(http.StatusCreated, gin.H{"New user id": userId})
}