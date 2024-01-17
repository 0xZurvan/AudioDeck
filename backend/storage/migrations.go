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
		name VARCHAR(120) NOT NULL,
		image VARCHAR(120) NOT NULL
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Users table created")

	if err != nil {
		log.Fatal(err)
	}
}

func (p *Postgres) CreateAlbumsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    image BYTEA,
    user_id INTEGER REFERENCES users(id),
    category VARCHAR(80)
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Albums table created")

	if err != nil {
		log.Fatal(err)
	}
}

func (p *Postgres) CreateSongsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS songs (
		id SERIAL PRIMARY KEY,
    title VARCHAR(120) NOT NULL,
    image BYTEA,
    file BYTEA,
    duration INTEGER,
    user_id INTEGER REFERENCES users(id),
    album_id INTEGER REFERENCES albums(id),
    category VARCHAR(120)
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Music table created")

	if err != nil {
		log.Fatal(err)
	}
}

func (p *Postgres) CreatePlaylistsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS playlists (
		id SERIAL PRIMARY KEY,
		name VARCHAR(120),
		user_id INTEGER REFERENCES users(id),
		is_private BOOLEAN
	)
	`
	_, err := p.db.Exec(query)

	fmt.Println("Playlist table created")

	if err != nil {
		log.Fatal(err)
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
		log.Fatal(err)
	}
}
