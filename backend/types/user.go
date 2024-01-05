package types

import 	"github.com/0xZurvan/Kiron2X/types"

type Listeners struct {
	Name     string
	Playlist *[]types.Playlists
}

type Artists struct {
	Name   string
	Albums *[]types.Albums
}
