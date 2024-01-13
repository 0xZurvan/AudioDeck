package models

type Playlist struct {
	ID   string  `json:"id"`
	Name string  `json:"name"`
	List []Music `json:"list"`
	Owner_Id int64 `json:"owner_id"`
	IsPrivate bool `json:"is_private"`
}
