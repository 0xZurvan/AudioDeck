package models

type User struct {
	ID        string     `json:"id"`
	Name      string     `json:"name"`
	Image     []byte     `json:"image"`
}

type UserQuery struct {
	Name      string     `json:"name"`
	Image     string     `json:"image"`
}
