package api

import (
	"net/http"
	"github.com/0xZurvan/Kiron2X/storage"
	"github.com/0xZurvan/Kiron2X/types"
	"github.com/gin-gonic/gin"
)

type Server struct {
	listenAddr string
	store storage.Storage
}


func NewServer(listenAddr string, store storage.Storage) *Server {
	return &Server{
		listenAddr: listenAddr,
		store: store,
	}
}

func (server *Server) Start() error {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()	

	router.GET("/albums", server.handleGetAlbums)
	router.POST("/albums", server.handleAddAlbums)

	return router.Run(server.listenAddr)
}

func (server *Server) handleGetAlbums(c *gin.Context) {
	albums := server.store.GetAlbums()
	c.IndentedJSON(http.StatusOK, albums)
}

func (server *Server) handleAddAlbums(context *gin.Context) {
	var newAlbum types.Album

	if err := context.BindJSON(&newAlbum); err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	albums = append(server.store.GetAlbums(), newAlbum)
	context.IndentedJSON(http.StatusCreated, newAlbum)
}
