package models

type Album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Image     string     `json:"image"`
	Artist Artist  `json:"artist"`
	Songs  []Music `json:"songs"`
	Category string `json:"category"`
}
