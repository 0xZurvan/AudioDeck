package models

type Music struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Image     []byte `json:"image"`
	File      []byte `json:"file"`
	Duration  int64  `json:"duration"`
	ArtistId int64  `json:"artist_id"`
	Category  string `json:"category"`
}

type MusicQuery struct {
	Title     string `json:"title"`
	Image     []byte `json:"image"`
	File      []byte `json:"file"`
	Duration  int64  `json:"duration"`
	ArtistId int64  `json:"artist_id"`
	Category  string `json:"category"`
}
