package types

type Music struct {
	ID       string `json:"id"`
	Title     string `json:"title"`
	File     string `json:"file"`
	Duration uint8 `json:"duration"`
	Creator  Artist `json:"creator"`
	Category string `json:"category"`
}
