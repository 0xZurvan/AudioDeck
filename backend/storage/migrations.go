package storage

import (
	"log"

	_ "github.com/lib/pq"
)

func (p *Postgres) CreateUsersTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name VARCHAR(40) NOT NULL UNIQUE,
		password VARCHAR(40) NOT NULL
	)`

	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating users table")
		return err
	}

	return nil
}

func (p *Postgres) CreateAlbumsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS albums (
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL UNIQUE,
		user_name VARCHAR(40) NOT NULL,
    user_id INTEGER REFERENCES users(id),
    category VARCHAR(40) NOT NULL
	)`

	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating albums table")
		return err
	}

	return nil
}

func (p *Postgres) CreateSongsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS songs (
		id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL UNIQUE,
    user_id INTEGER REFERENCES users(id),
    album_id INTEGER REFERENCES albums(id)
	)`

	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating songs table")
		return err
	}

	return nil
}

func (p *Postgres) CreatePlaylistsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS playlists (
		id SERIAL PRIMARY KEY,
		name VARCHAR(40) NOT NULL,
		user_id INTEGER REFERENCES users(id)
	)
	`
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating playlists table")
		return err
	}

	return nil
}

func (p *Postgres) CreatePlaylistsSongsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS playlists_songs (
		playlist_id INTEGER REFERENCES playlists(id),
		song_id INTEGER REFERENCES songs(id),
		PRIMARY KEY (playlist_id, song_id)
	)
	`
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating playlists_songs table")
		return err
	}

	return nil
}
