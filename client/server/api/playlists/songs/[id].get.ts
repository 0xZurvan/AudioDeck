import { type Song, type Playlist } from '@/types'

export default defineEventHandler(async (event) => {
  const playlistId = getRouterParam(event, 'id')
  try {
    const response = await $fetch<{ 'songs': Song[], 'playlist': Playlist }>(`${process.env.API_ENDPOINT}/playlists/songs/${playlistId}`)

    return {
      songs: response.songs,
      playlist: response.playlist
    }
  } catch (error) {
    console.error(`Error fetching playlist songs from id: ${playlistId} in nuxt server`, error)
  }
})