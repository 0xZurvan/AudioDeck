package models

type User struct {
	ID       int64 `json:"id"`
	Name     string `json:"name"`
	Image    []byte `json:"image"`
	Password string `json:"password"`
}

type UserUpdate struct {
	Name     string `json:"name"`
	Password string `json:"password"`
	Image    []byte `json:"image"`
}

type UserQuery struct {
	ID    int64 `json:"id"`
	Name  string `json:"name"`
	Image []byte `json:"image"`
}

type Credentials struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}
