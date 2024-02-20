<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer :class="{'hidden': isLoginRoute === true }" />
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

const isLoginRoute = computed(() => {
  return route.path === '/sign-in' || route.path === '/sign-up' ? true : false
})

provide('isLoginRoute', isLoginRoute)

onMounted(async () => {
  await getAllUsers()
  await getAllAlbums()
})
</script>