package models

type Playlist struct {
	ID   string  `json:"id"`
	Name string  `json:"name"`
	UserId int64 `json:"user_id"`
	IsPrivate bool `json:"is_private"`
}

