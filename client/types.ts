
export interface User {
  id: number
  name: string
  image?: File
}

export interface Album {
  id?: number
  title: string
  userId: number
  category: string
}