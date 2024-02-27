<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer :class="{'hidden': route.path === '/sign-in' || route.path === '/sign-up' }" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useAlbumStore } from '@/stores/album'

const userStore = useUserStore()
const albumStore = useAlbumStore()
const { getAllUsers } = userStore
const { getAllAlbums } = albumStore
const route = useRoute()

useHead({
  title: 'Audio Deck'
})

onMounted(async () => {
  await Promise.all([
   getAllUsers(),
   getAllAlbums()
  ])
})
</script>