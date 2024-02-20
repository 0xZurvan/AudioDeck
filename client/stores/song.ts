import { type Song } from '@/types'
import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', () => {
  // State
  const currentSongDefaults = {'id': 0, 'title': '', 'user_id': 0, 'album_id': 0, 'song': '/audio'}
  const currentSong = ref<Song>(currentSongDefaults)

  // Actions
  function updateCurrentSong(song: Song | undefined) {
    if(song) {
      currentSong.value = {
        id: song.id,
        title: song.title,
        user_id: song.user_id,
        album_id: song.album_id,
        song: song.song
      }
    }
  }

  return {
    currentSong,
    updateCurrentSong
  }
})