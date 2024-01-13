package models

type Album struct {
	ID        string  `json:"id"`
	Title     string  `json:"title"`
	Image     []byte  `json:"image"`
	ArtistId int64   `json:"artist_id"`
	Songs     []Music `json:"songs"`
	Category  string  `json:"category"`
}


type AlbumQuery struct {
	Title    string `json:"title"`
	Image    []byte `json:"image"`
	ArtistId int64 `json:"artist_id"`
	Songs    []Music `json:"songs"`
	Category string `json:"category"`
}
