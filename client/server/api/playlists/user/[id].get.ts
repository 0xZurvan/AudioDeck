import { Playlist } from '@/types'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  try {
    const playlists = await $fetch<Playlist[]>(`http://api:3001/playlists/user/${id}`)
    return playlists
    
  } catch (error) {
    console.error(`Error getting playlists from user id: ${id} in nuxt server`, error)
  }
})