import { User } from "~/types"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    return await $fetch<User>(`http://api:3001/users/${query.name}`) 
   
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})