package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	// "github.com/lib/pq"
	// "github.com/go-gorm/gorm"
)

func handler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Hello Go!",
	})

	fmt.Println("Running Go server!")
}

func main() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.GET("/", handler)
	fmt.Println("Sever is running...")

	router.Run(":8080")
}
