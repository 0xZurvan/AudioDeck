import axios from '@/lib/axios'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  try {
    const response = await axios.get(`/users/${query.name}`)
    return response.data.user
  } catch (error) {
    console.error('Error fetching users:', error)
    return null
  }
})