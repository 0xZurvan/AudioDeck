<template>
  <div class="flex flex-row items-center justify-between w-screen px-10 py-6 overflow-hidden bg-black">
    <Song v-if="currentSong.id !== 0" :songTitle="currentSong.title" :artistName="albumOfSong.user_name" :albumImg="(albumOfSong.image as string)" />
    <Song v-else songTitle="Empty" artistName="None" albumImg="/image" />

    <PlaySong :audio="(currentSong.song as string)" />
    
    <h3 class="text-xl font-bold text-white">Playing</h3>
  </div>
</template>

<script setup lang="ts">
import { useSongStore } from '@/stores/song'
import { useAlbumStore } from '@/stores/album'
import { storeToRefs } from 'pinia'

const songStore = useSongStore()
const albumStore = useAlbumStore()
const { currentSong } = storeToRefs(songStore)
const { albumOfSong } = storeToRefs(albumStore)

</script>

