package main

import (
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/0xZurvan/AudioDeck/api"
	"github.com/0xZurvan/AudioDeck/storage"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }

	port := os.Getenv("WS_PORT")
	connStr := os.Getenv("CONNECTION_STR")
	listenAddr := flag.String("listenAddr", port, "The server address")
	flag.Parse()

	store, err := storage.InitDB(connStr)
	if err != nil {
		log.Fatal(err)
	}

	createTables(store)

	server := api.NewAPIServer(*listenAddr, store)
	fmt.Println("Server is running on port:", *listenAddr)

	log.Fatal(server.Start())
}

func createTables(store *storage.Postgres) {
	tableCreators := []struct {
		name       string
		createFunc func() error
	}{
		{"Users", store.CreateUsersTable},
		{"Albums", store.CreateAlbumsTable},
		{"Songs", store.CreateSongsTable},
		{"Playlists", store.CreatePlaylistsTable},
		{"PlaylistsSongs", store.CreatePlaylistsSongsTable},
	}

	for _, table := range tableCreators {
		if err := table.createFunc(); err != nil {
			log.Fatalf("Error creating %s table: %v", table.name, err)
		} else {
			fmt.Printf("%s table created successfully\n", table.name)
		}
	}
}
