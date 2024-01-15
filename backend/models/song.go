package models

type Song struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Image     []byte `json:"image"`
	File      []byte `json:"file"`
	Duration  int64  `json:"duration"`
	UserId int64  `json:"user_id"`
	AlbumId int64 `json:"album_id"`
	Category  string `json:"category"`
}

type SongQuery struct {
	Title     string `json:"title"`
	Image     []byte `json:"image"`
	File      []byte `json:"file"`
	Duration  int64  `json:"duration"`
	UserId int64  `json:"user_id"`
	AlbumId int64 `json:"album_id"`
	Category  string `json:"category"`
}
