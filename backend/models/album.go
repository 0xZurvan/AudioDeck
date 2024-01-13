package models

type Album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Image     string     `json:"image"`
	Artist_ID int  `json:"artist_id"`
	Songs  []Music `json:"songs"`
	Category string `json:"category"`
}
