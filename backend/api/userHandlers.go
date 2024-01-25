package api

import (
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

type UserID struct {
	UserID int64 `json:"user_id"`
}


func (s *APIServer) handleGetAlbumsFromUserId(c *gin.Context) {
	id := c.Param("id")

	userId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	albums, err := s.store.GetAlbumsFromUserId(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"albums": albums})
}

func (s *APIServer) handleCreateNewUserAccount(c *gin.Context) {
	var newUser models.UserQuery

	if err := c.Bind(&newUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	userId, err := s.store.CreateNewUserAccount(&newUser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"New user id": userId})
}
