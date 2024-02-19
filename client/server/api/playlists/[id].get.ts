import { type Playlist } from '@/types'

export default defineEventHandler(async (event) => {
  const playlistId = getRouterParam(event, 'id')
  try {
    const playlist = await $fetch<Playlist>(`http://api:3001/playlists/${playlistId}`)
    return playlist
  } catch (error) {
    console.error(`Error fetching playlist id: ${playlistId} in nuxt server`, error)
  }
})