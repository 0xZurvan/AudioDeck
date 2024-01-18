package models

type Album struct {
	ID        string  `json:"id"`
	Title     string  `json:"title"`
	Image     string `json:"image"`
	UserId int64   `json:"user_id"`
	Category  string  `json:"category"`
}

type AlbumQuery struct {
	Title    string `json:"title"`
	Image    string `json:"image"`
	UserId int64   `json:"user_id"`
	Category string `json:"category"`
}
