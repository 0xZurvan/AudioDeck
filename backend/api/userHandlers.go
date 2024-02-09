package api

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type UserName struct {
	Name string `json:"name"`
}

type UserPassword struct {
	Password string `json:"password"`
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

	c.JSON(http.StatusOK, gin.H{"Successful request for albums": albums})
}

func (s *APIServer) handleGetUserByName(c *gin.Context) {
	name := c.Param("name")

	user, err := s.store.GetUserByName(name)
	if err != nil {
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	}

	c.JSON(http.StatusCreated, gin.H{"User": user})
}

func (s *APIServer) handleGetAllUsers(c *gin.Context) {
	users, err := s.store.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, &users)
}


func (s *APIServer) handleUpdateUserName(c *gin.Context) {
	id := c.Param("id")
	var userName UserName

	userId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	if err := c.BindJSON(&userName); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.UpdateUserName(userId, userName.Name)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"User name updated": true})
}

func (s *APIServer) handleUpdateUserPassword(c *gin.Context) {
	id := c.Param("id")
	var userPassword UserPassword

	userId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	if err := c.BindJSON(&userPassword); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.UpdateUserPassword(userId, userPassword.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"User password updated": true})
}

func (s *APIServer) handleRemoveUserById(c *gin.Context) {
	id := c.Param("id")
	userId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemoveUserById(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"Successfully removed user with id": userId})
}
