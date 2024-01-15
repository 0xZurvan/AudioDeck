package models

// Create a junction table with songs and playlist
type Playlist struct {
	ID   string  `json:"id"`
	Name string  `json:"name"`
	List []Song `json:"list"`
	Owner_Id int64 `json:"owner_id"`
	IsPrivate bool `json:"is_private"`
}
