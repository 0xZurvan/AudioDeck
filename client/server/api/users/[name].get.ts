import { User } from "@/types"

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  
  try {
    const user = await $fetch<User>(`${process.env.API_ENDPOINT}/users/${name}`) 
    return user
   
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})