import { Album } from "@/types"
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  try {
    const response = await $fetch<Album[]>(`${process.env.API_ENDPOINT}/albums/user/${id}`)
    return response

  } catch (error) {
    console.error(`Error getting albums from ${id}:`, error)
    return error
  }
})