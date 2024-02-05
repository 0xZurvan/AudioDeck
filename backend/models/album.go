package models

type Album struct {
	ID        int64  `json:"id"`
	Title     string  `json:"title"`
	UserId int64   `json:"user_id"`
	Category  string  `json:"category"`
}

type AlbumQuery struct {
	Title    string `json:"title"`
	UserId int64   `json:"user_id"`
	Category string `json:"category"`
}
