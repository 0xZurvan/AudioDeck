
export interface User {
  id: number
  name: string
  image?: File
}

export interface AlbumPost {
  title: string
  userId: number
  category: string
}

export interface Album {
  id: number
  title: string
  userId: number
  category: string
}

export interface SongPost {
  title: string
  userId: number
  albumId: number
}