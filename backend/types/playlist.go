package types

type Playlist struct {
	ID     string  `json:"id"`
	Name     string `json:"name"`
	List []Music `json:"list"`
}