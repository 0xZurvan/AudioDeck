import { Album } from "@/types"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  try {
    const response = await $fetch<Album>(`${process.env.API_ENDPOINT}/albums/${id}`) 
    return response
  } catch (error) {
    console.error(`Error fetching album id: ${id}`, error)
    return error
  }
})