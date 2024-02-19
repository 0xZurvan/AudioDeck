import { type Playlist, type Song } from '@/types'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { useAlbumStore } from './album'

export const usePlaylistStore = defineStore('playlist', () => {
  // State
  const connectedUserPlaylists = shallowRef<Playlist[]>([])
  const currentPlaylist = ref<Playlist>({ 'id': 0, 'name': '', 'user_id' : 0})
  const currentPlaylistSongs = ref<Song[]>([])

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
  
  async function getPlaylistById(id: number) {
    try {
      const playlist = await $fetch<Playlist>(`/api/playlists/${id}`)
      if(playlist) currentPlaylist.value = playlist
    } catch (error) {
      console.error(`Error getting playlist id ${id}`)
    }
  }

  async function getAllSongsFromPlaylistId(playlistId: number) {
    const albumStore = useAlbumStore()
    try {
      const response = await $fetch<{'songs': Song[], 'playlist': Playlist }>(`/api/playlists/songs/${playlistId}`)
      if (response.songs !== undefined) {
        const allSongs: Song[] = []
        for (let i = 0; i < response.songs.length; i++) {
          const songUrl = await albumStore.getSongFile(response.songs[i].album_id, response.songs[i].title)
          const updatedSong: Song = {
            id: response.songs[i].id,
            title: response.songs[i].title,
            user_id: response.songs[i].user_id,
            album_id: response.songs[i].album_id,
            song: songUrl !== undefined ? songUrl : '/song'
          }
          allSongs.push(updatedSong)
        }

        currentPlaylistSongs.value = allSongs
      }
    } catch (error) {
      console.error(`Error getting all songs from playlist id: ${playlistId}`, error);
    }
  }

  return {
    connectedUserPlaylists,
    currentPlaylist,
    currentPlaylistSongs,
    getPlaylistsFromUserId,
    getPlaylistById,
    getAllSongsFromPlaylistId
  }
})
