<template>
  <div class="flex flex-row justify-around space-x-10 max-w-screen h-[min(35vw)] rounded-lg">
    <div class="flex flex-col items-start max-h-screen space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">
      <h1 v-if="currentPlaylist" class="text-xl font-bold text-white">{{ currentPlaylist.name }}</h1>
      <h1 v-else class="text-xl font-bold text-white">Album</h1>
    
      <!-- Songs from album -->
      <ul class="flex flex-col gap-4">
        <li v-if="currentPlaylistSongs.length > 0" v-for="song in currentPlaylistSongs" :key="song.id" class="flex flex-row items-center gap-1">
          <SongCard :song="song" :songTitle="song.title" :songId="song.id" :playlistId="Number(route.params.id)" />
        </li>
        <li v-else v-for="(_, index) in 10" :key="index" class="flex flex-row items-center gap-1">
          <SongCard songTitle="Empty" :songId="0" />
        </li>
      </ul>
    </div>  
    
    <!-- Other playlists -->
    <div class="flex flex-col items-start max-h-screen space-y-6 overflow-y-scroll rounded-lg scroll-smooth scrollbar-none">
          
      <div class="flex flex-row space-x-[16vw] items-start">
        <h3 class="text-base text-white text-pretty">Other playlists</h3>
        <NuxtLink to="/profile" class="text-sm text-white hover:text-green-500 text-pretty">View all</NuxtLink>
      </div>
      
      <ul class="grid grid-cols-3 gap-4">
        <li v-if="otherPlaylists.length > 0" v-for="(playlist, index) in otherPlaylists" :key="playlist.id">
          <NuxtLink :to="'/playlists/' + (playlist ? playlist.id : '0')">
            <PlaylistCard :playlistName="playlist.name" :index="index + 1" />
          </NuxtLink>
        </li>
        <li v-else v-for="(_, index) in 3" :key="index">
          <PlaylistCard playlistName="Empty" :index="index + 1" />
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/stores/playlist'
import { storeToRefs } from 'pinia'

const route = useRoute()
const playlistStore = usePlaylistStore()

const { currentPlaylist, currentPlaylistSongs, connectedUserPlaylists } = storeToRefs(playlistStore)
const { getPlaylistById, getAllSongsFromPlaylistId } = playlistStore

const otherPlaylists = computed(() => {
  return connectedUserPlaylists.value.filter((playlist, index) => playlist.name !== currentPlaylist.value.name && index < 3)
})

onMounted(async () => {
  await getPlaylistById(Number(route.params.id))
  await getAllSongsFromPlaylistId(Number(route.params.id))
})

</script>
