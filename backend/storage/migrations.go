package storage

import (
	"log"

	_ "github.com/lib/pq"
)

func (p *SQLite) CreateUsersTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	)`
	
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating users table:", err)
	}

	return nil
}

func (p *SQLite) CreateAlbumsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS albums (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL UNIQUE,
		user_name TEXT NOT NULL,
		user_id INTEGER,
		category TEXT NOT NULL,
		FOREIGN KEY(user_id) REFERENCES users(id)
	)`
	
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating albums table:", err)
		return err
	}

	return nil
}

func (p *SQLite) CreateSongsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS songs (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		title TEXT NOT NULL UNIQUE,
		user_id INTEGER,
		album_id INTEGER,
		FOREIGN KEY(user_id) REFERENCES users(id),
		FOREIGN KEY(album_id) REFERENCES albums(id)
	)`
	
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating songs table:", err)
		return err
	}

	return nil
}

func (p *SQLite) CreatePlaylistsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS playlists (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		user_id INTEGER,
		FOREIGN KEY(user_id) REFERENCES users(id)
	)`
	
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating playlists table:", err)
		return err
	}

	return nil
}

func (p *SQLite) CreatePlaylistsSongsTable() error {
	query := `
	CREATE TABLE IF NOT EXISTS playlists_songs (
		playlist_id INTEGER,
		song_id INTEGER,
		PRIMARY KEY (playlist_id, song_id),
		FOREIGN KEY(playlist_id) REFERENCES playlists(id),
		FOREIGN KEY(song_id) REFERENCES songs(id)
	)`
	
	_, err := p.db.Exec(query)
	if err != nil {
		log.Println("Error creating playlists_songs table:", err)
		return err
	}

	return nil
}
