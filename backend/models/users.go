package models

type User struct {
	ID       int64 `json:"id"`
	Name     string `json:"name"`
	Password string `json:"password"`
}

type UserQuery struct {
	ID    int64 `json:"id"`
	Name  string `json:"name"`
}

type Credentials struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}
