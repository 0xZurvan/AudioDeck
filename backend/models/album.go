package models

type Album struct {
	ID        string  `json:"id"`
	Title     string  `json:"title"`
	Image     []byte  `json:"image"`
	Artist_Id int64   `json:"artist_id"`
	Songs     []Music `json:"songs"`
	Category  string  `json:"category"`
}
