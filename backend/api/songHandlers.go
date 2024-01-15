package api

import (
	"log"
	"net/http"
	"strconv"

	"github.com/0xZurvan/Kiron2X/models"
	"github.com/gin-gonic/gin"
)

func (s *APIServer) handleGetSongById(c *gin.Context) {
	id := c.Param("id")

	// Convert the string ID to int64
	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	song, err := s.store.GetSongById(songId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"song": song})
}

// /api/songs/album/:id
func (s *APIServer) handleGetAllSongsInAlbumById(c *gin.Context) {
	id := c.Param("id")
	albumId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	songs, album, err := s.store.GetAllSongsInAlbumById(albumId)
	if err != nil {
		log.Fatal(err)
	}

	response := gin.H{
		"songs": songs,
		"album": album,
	}

	c.IndentedJSON(http.StatusOK, gin.H{"all songs in album": response})

}

func (s *APIServer) handleAddNewSongToAlbum(c *gin.Context) {
	var newSong models.SongQuery

	if err := c.BindJSON(&newSong); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	_, err := s.store.AddNewSongToAlbum(&newSong)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK,  gin.H{"message": "New song added successfully"})
}

func (s *APIServer) handleRemoveSongById(c *gin.Context) {
	id := c.Param("id")

	songId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err = s.store.RemoveSongById(songId)
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"Successfully removed song id:": songId})
}
