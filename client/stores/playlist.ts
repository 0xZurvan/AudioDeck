import { type Playlist } from '@/types'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import axios from 'axios'

export const usePlaylistStore = defineStore('playlist', () => {
  // State
  const connectedUserPlaylists = shallowRef<Playlist[]>([])

  // Actions
  async function getPlaylistsFromUserId() {
    const userStore = useUserStore()
    try {
      const playlists = await $fetch<Playlist[]>(`/api/playlists/user/${userStore.user.id}`)
      if(playlists.length > 0) connectedUserPlaylists.value = playlists
      
    } catch (error) {
      console.error('Error getting user playlists', error)
    }
  }

  return {
    connectedUserPlaylists,
    getPlaylistsFromUserId
  }
})
