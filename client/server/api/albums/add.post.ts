import { AlbumPost } from "@/types"

export default defineEventHandler(async (event) => {
  const body: AlbumPost = await readBody(event)

  try {
    const response = await $fetch('http://api:3001/albums', {
      method: 'POST',
      body: {
        title: body.title,  
        user_name: body.user_name,
        user_id: body.user_id,
        category: body.category
      }
    })

    return response 
  } catch (error) {
    console.error('Error adding new album:', error)
    return error
  }
})