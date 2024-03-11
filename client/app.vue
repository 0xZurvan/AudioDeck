<template>
  <NuxtLoadingIndicator />
  <div class="flex-col hidden w-screen h-screen max-h-screen overflow-hidden :justify-between xl:flex lg:flex position relative">
    <NuxtLayout>
      <Toast v-if="!isUsersData" message="Data hasn't been loaded from the server. This site is using a free platform to run the backend server" type="loading" />
      <Toast v-else message="Data successfully retrieved from the server! " type="success" />
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer :class="{'hidden': route.path === '/sign-in' || route.path === '/sign-up' }" />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useAlbumStore } from '@/stores/album'
import { storeToRefs } from 'pinia'

useHead({
  title: 'Audio Deck'
})

const userStore = useUserStore()
const albumStore = useAlbumStore()

const { isUsersData } = storeToRefs(userStore)
const { getAllUsers } = userStore
const { getAllAlbums } = albumStore
const route = useRoute()

onMounted(async () => {
  await Promise.all([
   getAllUsers(),
   getAllAlbums()
  ])
})
</script>