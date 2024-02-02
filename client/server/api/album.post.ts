
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const response = await $fetch('http://api:3001/albums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })

    return response
  } catch (error) {
    console.error('Error adding new album:', error)
    return error
  }
})