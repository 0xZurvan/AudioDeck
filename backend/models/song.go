package models

type Song struct {
	ID       string `json:"id"`
	Title    string `json:"title"`
	UserId   int64  `json:"user_id"`
	AlbumId  int64  `json:"album_id"`
}

type SongQuery struct {
	Title    string `json:"title"`
	UserId   int64  `json:"user_id"`
	AlbumId  int64  `json:"album_id"`
}
