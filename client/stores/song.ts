import { type Song } from '@/types'
import { defineStore } from 'pinia'
import { useAlbumStore } from './album'

export const useSongStore = defineStore('song', () => {
  // State
  const currentSongDefaults = {'id': 0, 'title': '', 'user_id': 0, 'album_id': 0, 'song': '/audio'}
  const currentSong = ref<Song>(currentSongDefaults)

  // Actions
  async function updateCurrentSong(song?: Song, albumTitle?: string) {
    const albumStore = useAlbumStore()
    if(song && albumTitle) {
      const image = await albumStore.getAlbumImage(albumTitle)
      currentSong.value = {
        id: song.id,
        title: song.title,
        user_id: song.user_id,
        album_id: song.album_id,
        song: song.song,
        album_image: image !== undefined ? image : '/image'
      }
    }
  }

  return {
    currentSong,
    updateCurrentSong
  }
})