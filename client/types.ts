
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
  image?: File | string
}

export interface SongPost {
  title: string
  user_id: number
  album_id: number
}