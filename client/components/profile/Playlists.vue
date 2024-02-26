<template>
  <div class="flex flex-col items-start w-full space-y-8 h-[min(34vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <div class="flex flex-row items-center gap-2">
      <h2 class="text-lg text-white">Playlists</h2>
      <PlaylistDialog />
    </div>
    
    <ul class="flex flex-col items-start w-full gap-4">
      <li v-if="connectedUserPlaylists.length > 0" v-for="(playlist, index) in connectedUserPlaylists" :key="playlist.id">
        <NuxtLink :to="'/playlists/' + (playlist ? playlist.id : '0')">
          <PlaylistCard :playlistName="playlist.name" :index="index + 1" />
        </NuxtLink>
      </li>
      <li v-else>
        <PlaylistCard playlistName="Empty" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePlaylistStore } from '@/stores/playlist'
import { storeToRefs } from 'pinia'

const playlistStore = usePlaylistStore()
const { connectedUserPlaylists } = storeToRefs(playlistStore)
const { getPlaylistsFromUserId } = playlistStore

onMounted(async () => {
  await getPlaylistsFromUserId()
})

</script>
