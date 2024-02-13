import { User } from "~/types"

export default defineEventHandler(async () => {
  try {
    const response = await $fetch<User[] | []>('http://api:3001/users')
    if (response.length > 0) return response
    else return undefined
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})