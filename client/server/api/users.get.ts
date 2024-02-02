
export default defineEventHandler(async () => {
  try {
    const response = await $fetch('http://api:3001/users')
    return response
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})