import { Album } from "@/types"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  try {
    const response = await $fetch<Album>(`http://api:3001/albums/${id}`) 
    return response
  } catch (error) {
    console.error(`Error fetching album id: ${id}`, error)
    return error
  }
})