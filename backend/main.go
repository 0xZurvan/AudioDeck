package main

import (
	"flag"
	"fmt"
	"log"

	"github.com/0xZurvan/Kiron2X/api"
	"github.com/0xZurvan/Kiron2X/storage"
)

func main() {
	listenAddr := flag.String("listenAddr", ":3001", "The server address")
	flag.Parse()

	store, err := storage.NewPostgres()

	if err != nil {
		log.Fatal(err)
	}

	server := api.NewAPIServer(*listenAddr, store)
	fmt.Println("Server is running on port:", *listenAddr)

	log.Fatal(server.Start())
}
