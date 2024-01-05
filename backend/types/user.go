package types

type Listeners struct {
	ID     string  `json:"id"`
	Name      string     `json:"name"`
	Playlists []Playlist `json:"playlists"`
}

type Artist struct {
	ID     string  `json:"id"`
	Name   string  `json:"name"`
	Albums []Album `json:"albums"`
}
