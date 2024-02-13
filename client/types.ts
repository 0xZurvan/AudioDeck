
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
  userId: number
  category: string
}

export interface Album {
  id: number
  title: string
  userId: number
  category: string,
  image?: File | string
}

export interface SongPost {
  title: string
  userId: number
  albumId: number
}