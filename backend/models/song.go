package models

type Song struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	Image    string `json:"image"`
	File     string `json:"file"`
	UserId   int64  `json:"user_id"`
	AlbumId  int64  `json:"album_id"`
}

type SongQuery struct {
	Title    string `json:"title"`
	Image    string `json:"image"`
	File     string `json:"file"`
	UserId   int64  `json:"user_id"`
	AlbumId  int64  `json:"album_id"`
}
