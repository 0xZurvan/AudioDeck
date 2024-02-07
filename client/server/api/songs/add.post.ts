import { SongPost } from "@/types"

export default defineEventHandler(async (event) => {
  const body: SongPost = await readBody(event)

  try {
    const response = await $fetch('http://api:3001/songs', {
      method: 'POST',
      body: {
        title: body.title,  
        user_id: body.userId,
        album_id: body.albumId
      }
    })

    return response 
  } catch (error) {
    console.error('Error adding new album:', error)
    return error
  }
})