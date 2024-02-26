
export default defineEventHandler(async (event) => {
  const body: { 'playlist_id': number, 'song_id': number } = await readBody(event)

  try {
    const response = await $fetch(`${process.env.API_ENDPOINT}/playlists/song`, {
      method: 'DELETE',
      body: {
        playlist_id: body.playlist_id,  
        song_id: body.song_id
      }
    })

    return response 
  } catch (error) {
    console.error('Error removing song from playlist in nuxt server:', error)
    return error
  }
})