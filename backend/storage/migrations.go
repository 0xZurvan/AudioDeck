package storage

import (
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func (p *Postgres) CreateUsersTable() {
	query := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name VARCHAR(40) NOT NULL UNIQUE,
		password VARCHAR(40) NOT NULL
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Users table created")

	if err != nil {
		log.Println("Error creating users table")
	}
}

func (p *Postgres) CreateAlbumsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL UNIQUE,
		user_name VARCHAR(40) NOT NULL,
    user_id INTEGER REFERENCES users(id),
    category VARCHAR(40) NOT NULL
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Albums table created")

	if err != nil {
		log.Println("Error creating albums table")
	}
}

func (p *Postgres) CreateSongsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS songs (
		id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id),
    album_id INTEGER REFERENCES albums(id)
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Songs table created")

	if err != nil {
		log.Println("Error creating songs table")
	}
}

func (p *Postgres) CreatePlaylistsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS playlists (
		id SERIAL PRIMARY KEY,
		name VARCHAR(40) NOT NULL,
		user_id INTEGER REFERENCES users(id)
	)
	`
	_, err := p.db.Exec(query)

	fmt.Println("Playlist table created")

	if err != nil {
		log.Println("Error creating playlists table")
	}
}

func (p *Postgres) CreatePlaylistsSongsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS playlists_songs (
		playlist_id INTEGER REFERENCES playlists(id),
		song_id INTEGER REFERENCES songs(id),
		PRIMARY KEY (playlist_id, song_id)
	)
	`
	_, err := p.db.Exec(query)

	fmt.Println("playlists_songs table created")

	if err != nil {
		log.Println("Error creating playlists_songs table")
	}
}
