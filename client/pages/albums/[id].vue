<template>
  <div class="flex flex-row justify-around space-x-10 max-w-screen h-[min(35vw)] rounded-lg">
    <div class="flex flex-col items-start max-h-screen space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">
      <h1 v-if="album" class="text-xl font-bold text-white">{{ album.title }}</h1>
      <h1 v-else class="text-xl font-bold text-white">Album</h1>
    
      <!-- Songs from album -->
      <ul class="flex flex-col gap-4">
        <li v-if="songs.length > 0" v-for="(song, index) in songs" :key="song.id" class="flex flex-row items-center gap-1">
          <p class="text-white">{{ index + 1 }}.</p>
          <SongCard @click="updateCurrentSong(song)" :songTitle="song.title" :albumTitle="album?.title" />
        </li>
        <li v-else v-for="(_, index) in 10" :key="index" class="flex flex-row items-center gap-1">
          <p class="text-white">{{ index + 1 }}.</p>
          <SongCard songTitle="Empty" albumTitle="None" />
        </li>
      </ul>
    </div>  
    
    <!-- Other albums from artist -->
    <div class="flex flex-col items-start max-h-screen space-y-6 overflow-y-scroll rounded-lg scroll-smooth scrollbar-none">
          
      <div class="flex flex-row space-x-[16vw] items-start">
        <h3 class="text-base text-white text-pretty">Other albums from Kiron2X</h3>
        <NuxtLink :to="'/artists/' + (album ? album.user_id : '0')" class="text-sm text-white hover:text-green-500 text-pretty">View all</NuxtLink>
      </div>
      
      <ul class="grid grid-cols-3 gap-4">
        <li v-if="userAlbums.length > 0" v-for="album in userAlbums" :key="album.id">
          <NuxtLink :to="'/albums/' + (album ? album.id : '0')">
            <SmallAlbumCard :albumTitle="album.title" :image="(album.image as string)" />
          </NuxtLink>
        </li>
        <li v-else v-for="(_, index) in 3" :key="index">
          <SmallAlbumCard albumTitle="Empty" image="/image" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import { type Album } from '@/types'
import { useAlbumStore } from '@/stores/album'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'

const route = useRoute()
const albumStore = useAlbumStore()
const songStore = useSongStore()
const { songs, albumsOfUser } = storeToRefs(albumStore)
const { setAllSongsFromAlbumId, getAllAlbumsOfUser } = albumStore
const { updateCurrentSong } = songStore

const userAlbums = computed(() => {
  return albumsOfUser.value.filter((value, index) => index < 3 && album?.value?.title !== value.title)
})

const { data: album } = await useFetch(`/api/albums/${route.params.id}`, {
  transform: (album: Album) => {
    return {
      title: album.title,
      user_id: album.user_id
    }
  }
})

onMounted(async () => {
 await setAllSongsFromAlbumId(Number(route.params.id))
 await getAllAlbumsOfUser(Number(album?.value?.user_id))
})


</script>

