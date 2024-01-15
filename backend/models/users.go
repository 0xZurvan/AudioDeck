package models

type User struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Image     []byte     `json:"image"`
	Playlists []Playlist `json:"playlists"`
	Albums    []Album    `json:"albums"`
	Followers uint64     `json:"followers"`
}

