<template>
  <div class="flex flex-col items-start w-full h-[min(34vw)] space-y-8 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <div class="flex flex-row items-center gap-2">
      <h2 class="text-lg text-white">Albums</h2>
      <NuxtLink to="/upload">
        <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"/></svg>
      </NuxtLink>  
    </div>
    
    <ul class="flex flex-col items-start w-full gap-4">
      <li v-if="albumsOfConnectedUser.length > 0" v-for="album in albumsOfConnectedUser" :key="album.id">
        <NuxtLink :to="'/albums/' + (album ? album.id : '0')">
          <AlbumProfileCard :albumTitle="album.title" :albumImg="(album.image as string)" />
        </NuxtLink>
      </li>
      <li v-else v-for="(_, index) in 10" :key="index">
        <AlbumProfileCard albumTitle="Empty" albumImg="/img" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/stores/album'
import { storeToRefs } from 'pinia'

const albumStore = useAlbumStore()
const { albumsOfConnectedUser } = storeToRefs(albumStore)
const { getAllAlbumsOfConnectedUser } = albumStore


onMounted(async () => {
 await getAllAlbumsOfConnectedUser()
})

</script>
