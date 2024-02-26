import { type Album } from "@/types"

export default defineEventHandler(async () => {
  try {
    const response = await $fetch<Album[]>(`${process.env.API_ENDPOINT}/albums`)
    return response
  } catch (error) {
    console.error('Error fetching all albums', error)
    return error
  }
})