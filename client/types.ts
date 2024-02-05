
export interface User {
  id: number
  name: string
  userId: number
  image?: File
}

export interface Album {
  title: string
  image: File
  filePath: string
  userId: number
  category: string
}