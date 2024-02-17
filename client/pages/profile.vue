<template>
  <div class="flex flex-row-reverse items-start justify-between gap-10 max-w-screen h-[min(35vw)] overflow-hidden">
    <UserSection />
    <Separator class="bg-neutral-950" orientation="vertical" />
    <div class="flex flex-row justify-between w-full gap-10">
      <Playlists />
      <AlbumsProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/stores/album'
import { usePlaylistStore } from '@/stores/playlist'

const albumStore = useAlbumStore()
const { getAllAlbumsOfConnectedUser } = albumStore

const playlistStore = usePlaylistStore()
const { getPlaylistsFromUserId } = playlistStore

onMounted(async () => {
  await getPlaylistsFromUserId()
  await getAllAlbumsOfConnectedUser()
})  

</script>
