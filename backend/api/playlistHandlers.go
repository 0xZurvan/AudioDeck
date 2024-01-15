package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetPlaylistById(c *gin.Context) {
	id := c.Param("id")

	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	playlist, err := s.store.GetPlaylistById(playlistId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, playlist)
}

func (s *APIServer) handleGetAllPlaylists(c *gin.Context) {
	playlists, err := s.store.GetAllPlaylists()
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"playlists": playlists})
}

func (s *APIServer) handleGetAllSongsInPlaylistById(c *gin.Context) {
	id := c.Param("id")
	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songs, playlist, err := s.store.GetAllSongsInPlaylistById(playlistId)
	if err != nil {
		log.Fatal(err)
	}

	response := gin.H{
		"songs": songs,
		"playlist": playlist,
	}

	c.IndentedJSON(http.StatusOK, gin.H{"response": response})
}

func (s *APIServer) handleCreateNewPlaylist(c *gin.Context) {
	var newPlaylist models.Playlist

	if err := c.BindJSON(&newPlaylist); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		log.Fatal(err)
	}

	_, err := s.store.CreateNewPlaylist(&newPlaylist)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusCreated, gin.H{"message": "Successfully playlist created"})
}

func (s *APIServer) handleAddSongToPlaylist(c *gin.Context) {
	songId, err := strconv.ParseInt(c.Query("song_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid song_id"})
		return
	}

	playlistId, err := strconv.ParseInt(c.Query("playlist_id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid playlist_id"})
		return
	}

	err = s.store.AddSongToPlaylist(playlistId, songId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to add song to playlist"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Song added to playlist successfully"})
}

func (s *APIServer) handleRemovePlaylistById(c *gin.Context) {
	id := c.Param("id")
	playlistId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemovePlaylistById(playlistId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"message": "Successfully removed playlist"})
}