
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    const response = await $fetch(`http://api:3001/users/${query.name}`)
    return response
  } catch (error) {
    console.error('Error fetching users:', error)
    return error
  }
})