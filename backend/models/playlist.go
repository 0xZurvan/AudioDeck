package models

type Playlist struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	UserId    int64  `json:"user_id"`
}

type PlaylistQuery struct {
	Name      string `json:"name"`
	UserId    int64  `json:"user_id"`
}

type PlaylistsSongs struct {
	PlaylistId int64 `json:"playlist_id"`
	SongId     int64 `json:"song_id"`
}
