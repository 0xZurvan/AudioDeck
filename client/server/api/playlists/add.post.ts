export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const response = await $fetch('http://api:3001/playlists', {
      method: 'POST',
      body: {
        name: body.name,
        user_id: Number(body.user_id)
      }
    })
  
    return response
  } catch (error) {
    console.error('Error adding new playlist in nuxt server', error)
  }
})