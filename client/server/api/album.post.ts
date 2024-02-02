import axios from '@/lib/axios'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const response = await axios.post('/albums', body)
    return response.data
  } catch (error) {
    console.error('Error adding new album:', error)
    return null
  }
})