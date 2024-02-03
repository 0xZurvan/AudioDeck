import { Album } from "~/types"

export default defineEventHandler(async (event) => {
  const body: Album = await readBody(event)
  console.log('body', body)
  try {
    const response = await $fetch('http://api:3001/albums', {
      method: 'POST',
      body: {
        title: body.title,
        image: body.image,
        user_id: body.userId,
        category: body.category
      }
    })

    return response
  } catch (error) {
    console.error('Error adding new album:', error)
    return error
  }
})