package api

import (
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetPlaylistById(c *gin.Context) {
	id := c.Param("id")

	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	playlist, err := s.store.GetPlaylistById(playlistId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, playlist)
}

func (s *APIServer) handleGetAllPlaylists(c *gin.Context) {
	playlists, err := s.store.GetAllPlaylists()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, playlists)
}

func (s *APIServer) handleGetAllPlaylistsFromUserId(c *gin.Context) {
	id := c.Param("id")

	userId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	
	playlists, err := s.store.GetAllPlaylistsFromUserId(userId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, playlists)
}

func (s *APIServer) handleGetAllSongsInPlaylistById(c *gin.Context) {
	id := c.Param("id")
	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songs, playlist, err := s.store.GetAllSongsInPlaylistById(playlistId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := gin.H{
		"songs":    songs,
		"playlist": playlist,
	}

	c.JSON(http.StatusOK, response)
}

func (s *APIServer) handleCreateNewPlaylist(c *gin.Context) {
	var newPlaylist models.PlaylistQuery

	if err := c.BindJSON(&newPlaylist); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := s.store.CreateNewPlaylist(&newPlaylist)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Successfully playlist created"})
}

func (s *APIServer) handleAddSongToPlaylist(c *gin.Context) {
	var playlistsSongs models.PlaylistsSongs

	if err := c.BindJSON(&playlistsSongs); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := s.store.AddSongToPlaylist(playlistsSongs.PlaylistId, playlistsSongs.SongId); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add song to playlist"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": true, "message": "Song added to playlist successfully", "songId": playlistsSongs.SongId})
}

func (s *APIServer) handleRemovePlaylistById(c *gin.Context) {
	id := c.Param("id")
	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemovePlaylistById(playlistId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"Successfully removed playlist with id": playlistId})
}
