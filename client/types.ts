
export interface User {
  id: number
  name: string
  image?: File
}

export interface Album {
  title: string
  userId: number
  category: string
}