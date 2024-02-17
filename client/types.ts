
export interface User {
  id: number
  name: string
  image?: File | string
}

export interface UserCredentials { 
  name: string, 
  password: string 
}

export interface AlbumPost {
  title: string
  user_name: string
  user_id: number
  category: string
}

export interface Album {
  id: number
  title: string
  user_name: string
  user_id: number
  category: string,
  image: File | string
}

export interface Song {
  id: number
  title: string
  user_id: number
  album_id: number
  song: File | string
}

export interface SongPost {
  title: string
  user_id: number
  album_id: number
}

export interface Playlist {
	id: number
	name: string 
	user_id: number
}