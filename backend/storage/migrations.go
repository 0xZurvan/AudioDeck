package storage

import (
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func (p *Postgres) CreateListenersTable() {
	query := `
	CREATE TABLE IF NOT EXISTS listeners (
		id SERIAL PRIMARY KEY,
		name VARCHAR(120) NOT NULL,
		image BYTEA,
		playlist JSONB
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Listeners table created")

	if err != nil {
		log.Fatal(err)
	}
}

func (p *Postgres) CreateArtistsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS artists (
		id SERIAL PRIMARY KEY,
		name VARCHAR(120) NOT NULL,
		image BYTEA,
		albums JSONB
		playlist JSONB
		followers INTEGER
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Artists table created")

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
    artist_id INTEGER REFERENCES artists(id),
    category VARCHAR(80)
	)`

	_, err := p.db.Exec(query)

	fmt.Println("Artists table created")

	if err != nil {
		log.Fatal(err)
	}
}

func (p *Postgres) CreateMusicsTable() {
	query := `
	CREATE TABLE IF NOT EXISTS musics (
		id SERIAL PRIMARY KEY,
		title VARCHAR(120) NOT NULL,
		image BYTEA,
		file BYTEA,
		duration INTEGER,
		artist_id INTERGER REFERENCES artists(id),
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
		list JSONB,
		owner_id INTEGER REFERENCE listeners(id),
		is_private BOOLEAN
	)
	`
	_, err := p.db.Exec(query)

	fmt.Println("Playlist table created")

	if err != nil {
		log.Fatal(err)
	}
}
