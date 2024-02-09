package api

import (
	"net/http"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)


func (s *APIServer) handleSignUp(c *gin.Context) {
	var credentials models.Credentials

	if err := c.Bind(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := s.store.SignUp(&credentials)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, user)
}

func (s *APIServer) handleSignIn(c *gin.Context) {
	var credentials models.Credentials

	if err := c.Bind(&credentials); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := s.store.SignIn(&credentials)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, user)
}