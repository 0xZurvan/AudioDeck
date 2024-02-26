import { Song, Album } from "@/types"

export default defineEventHandler(async (event) => {
  const albumId = getRouterParam(event, 'id')
  
  try {
    const response = await $fetch<{'songs': Song[], 'album': Album }>(`${process.env.API_ENDPOINT}/songs/album/${albumId}`) 
    return {
      songs: response.songs,
      album: response.album
    }
  } catch (error) {
    console.error(`Error fetching songs from album id: ${albumId}`, error)
    return error
  }
})