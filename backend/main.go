package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	// "github.com/lib/pq"
	// "github.com/go-gorm/gorm"
)

func main() {
	router := gin.Default()

	router.GET("/albums", handleGetAlbums)
	router.POST("/albums", handleAddAlbums)
	fmt.Println("Server listening on :5173")

	router.Run(":5173")
}


