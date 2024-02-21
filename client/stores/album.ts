import { type Album, type Song } from '@/types'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './user'

export const useAlbumStore = defineStore('album', () => {
  // State
  const albums = shallowRef<Album[]>([])
  const albumsOfUser = shallowRef<Album[]>([])
  const albumsOfConnectedUser = shallowRef<Album[]>([])
  const albumOfSong = ref<Album>({'id': 0, 'title': '', 'user_name': '', 'user_id': 0, 'category': '', 'image': '/image'})
  const songs = shallowRef<Song[]>([])
  const sbClient = useSupabaseClient()

  // Actions
  async function getAllAlbums() {
    try {
      const response = await $fetch<Album[]>('/api/albums/all')
      if (response !== undefined) {
        const allAlbums: Album[] = []
        for (let i = 0; i < response.length; i++) {
          const image = await getAlbumImage(response[i].title)
          const updatedAlbum: Album = {
            id: response[i].id,
            title: response[i].title,
            user_name: response[i].user_name,
            user_id: response[i].user_id,
            category: response[i].category,
            image: image !== undefined ? image : '/image'
          }
          allAlbums.push(updatedAlbum)
        }

        albums.value = allAlbums
      }
    } catch (error) {
      console.error('Error getting all albums', error);
    }
  }

  async function getAllAlbumsOfUser(userId: number) {
    try {
      const response = await $fetch<Album[]>(`/api/albums/user/${userId}`)
      if (response !== undefined) {
        const allAlbums: Album[] = []
        for (let i = 0; i < response.length; i++) {
          const image = await getAlbumImage(response[i].title)
          const updatedAlbum: Album = {
            id: response[i].id,
            title: response[i].title,
            user_name: response[i].user_name,
            user_id: response[i].user_id,
            category: response[i].category,
            image: image !== undefined ? image : '/image'
          }
          allAlbums.push(updatedAlbum)
        }

        albumsOfUser.value = allAlbums
      }
    } catch (error) {
      console.error(`Error getting all albums of user id ${userId}`, error);
    }
  }

  async function getAllAlbumsOfConnectedUser() {
    const userStore = useUserStore()
    try {
      const response = await $fetch<Album[]>(`/api/albums/user/${userStore.user.id}`)
      if (response !== undefined) {
        const allAlbums: Album[] = []
        for (let i = 0; i < response.length; i++) {
          const image = await getAlbumImage(response[i].title)
          
          const updatedAlbum: Album = {
            id: response[i].id,
            title: response[i].title,
            user_name: response[i].user_name,
            user_id: response[i].user_id,
            category: response[i].category,
            image: image !== undefined ? image : '/image'
          }
          allAlbums.push(updatedAlbum)
        }

        albumsOfConnectedUser.value = allAlbums
      }
    } catch (error) {
      console.error(`Error getting all albums of user id ${userStore.user.id}`, error);
    }
  }

  async function setAllSongsFromAlbumId(albumId: number) {
    try {
      const response = await $fetch<{'songs': Song[], 'album': Album }>(`/api/songs/album/${albumId}`)
      if (response.songs !== undefined) {
        const allSongs: Song[] = []
        for (let i = 0; i < response.songs.length; i++) {
          const songUrl = await getSongFile(response.songs[i].album_id, response.songs[i].title)
          const updatedSong: Song = {
            id: response.songs[i].id,
            title: response.songs[i].title,
            user_id: response.songs[i].user_id,
            album_id: response.songs[i].album_id,
            song: songUrl !== undefined ? songUrl : '/song'
          }
          allSongs.push(updatedSong)
        }

        const albumImage = await getAlbumImage(response.album.title)

        songs.value = allSongs

        albumOfSong.value = {
          id: response.album.id,
          title: response.album.title,
          user_name: response.album.user_name,
          user_id: response.album.user_id,
          category: response.album.category,
          image: albumImage !== undefined ? albumImage : '/image'
        }

      }
    } catch (error) {
      console.error('Error getting all songs', error);
    }
  }

  async function getAllSongsFromAlbumId(albumId: number) {
    try {
      const response = await $fetch<{'songs': Song[], 'album': Album }>(`/api/songs/album/${albumId}`)
      if (response.songs !== undefined) {
        const allSongs: Song[] = []
        for (let i = 0; i < response.songs.length; i++) {
          const songUrl = await getSongFile(response.songs[i].album_id, response.songs[i].title)
          const updatedSong: Song = {
            id: response.songs[i].id,
            title: response.songs[i].title,
            user_id: response.songs[i].user_id,
            album_id: response.songs[i].album_id,
            song: songUrl !== undefined ? songUrl : '/song'
          }
          allSongs.push(updatedSong)
        }

        return allSongs
      }
    } catch (error) {
      console.error('Error getting all songs', error);
    }
  }

  async function getAlbumImage(title: string): Promise<string | undefined> {
    try {
      const { data: imageUrl } = sbClient.storage.from('albums').getPublicUrl(title)
      const response = await axios.get(imageUrl.publicUrl)
      .catch((error) => {
        if (error) return undefined
      })

      if (response?.status === 200) {
        return imageUrl.publicUrl
      } else {
        return undefined
      }
    } catch (error) {
      return undefined
    }
  }

  async function getSongFile(albumId: number, title: string): Promise<string | undefined> {
    try {
      const { data: songUrl } = sbClient.storage.from('songs').getPublicUrl(`${albumId}/${title}`)
      const response = await axios.get(songUrl.publicUrl)
      .catch((error) => {
        if (error) return undefined
      })

      if (response?.status === 200) {
        return songUrl.publicUrl
      } else {
        return undefined
      }
    } catch (error) {
      return undefined
    }
  }

  return {
    albums,
    albumsOfUser,
    albumOfSong,
    albumsOfConnectedUser,
    songs,
    getAllAlbums,
    getAllAlbumsOfUser,
    setAllSongsFromAlbumId,
    getAllSongsFromAlbumId,
    getAllAlbumsOfConnectedUser,
    getSongFile,
    getAlbumImage
  }
})