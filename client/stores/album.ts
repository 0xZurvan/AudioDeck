import { type Album } from '@/types'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAlbumStore = defineStore('album', () => {
  // State
  const albums = shallowRef<Album[]>([])
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
        console.error('Error getting all users', error);
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

  return {
    albums,
    getAllAlbums
  }
})