package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/0xZurvan/Kiron2X/api"
	"github.com/0xZurvan/Kiron2X/storage"
	// "github.com/lib/pq"
	// "github.com/go-gorm/gorm"
)

func main() {
	listenAddr := flag.String("listenAddr", ":3000", "The server address")
	flag.Parse()

	store := storage.NewPostgres()

	server := api.NewAPIServer(*listenAddr, store)
	fmt.Println("Server is running on port:", *listenAddr)

	log.Fatal(server.Start())
}
