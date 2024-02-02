import axios from '@/lib/axios'

export default defineEventHandler(async () => {
  try {
    const response = await axios.get('/users')
    return response.data.users
  } catch (error) {
    console.error('Error fetching users:', error)
    return null
  }
})