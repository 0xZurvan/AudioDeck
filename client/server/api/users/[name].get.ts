import { User } from "@/types"

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  
  try {
    const user = await $fetch<User>(`http://api:3001/users/${name}`) 
    return user
   
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})