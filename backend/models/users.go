package models

type Listeners struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Image     string     `json:"image"`
	Playlists []Playlist `json:"playlists"`
}

type Artist struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Image     string     `json:"image"`
	Albums    []Album    `json:"albums"`
	Playlists []Playlist `json:"playlists"`
	Followers uint64     `json:"followers"`
}
