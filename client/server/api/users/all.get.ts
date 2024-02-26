import { User } from "@/types"

export default defineEventHandler(async () => {
  try {
    const response = await $fetch<User[] | []>(`${process.env.API_ENDPOINT}/users`)
    if (response.length > 0) return response
    else return undefined
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})