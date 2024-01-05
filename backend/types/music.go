package types

type Music struct {
	ID     string  `json:"id"`
	Name string
	File string
	Duration int
	Creator Artist
}

