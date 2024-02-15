<template>
  <main class="flex flex-row justify-around max-w-screen h-[min(35vw)] space-x-10 overflow-hidden rounded-lg">

    <!-- Albums section -->
    <div class="flex flex-col h-full max-h-screen space-y-10 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
      <h2 class="text-xl font-bold text-white">All albums from Kiron2X</h2>

      <ul class="grid grid-cols-3 gap-4">
        <li v-if="albumsOfUser.length > 0" v-for="album in albumsOfUser" :key="album.id">
          <NuxtLink :to="'/albums/' + (album ? album.id : '0')">
            <SmallAlbumCard :albumTitle="album.title" :image="(album.image as string)" />
          </NuxtLink>
        </li>
        <li v-else v-for="(_, index) in 3" :key="index">
          <SmallAlbumCard albumTitle="Empty" image="/image" />
        </li>
      </ul>
    </div>

    <!-- Artist and recent songs section -->
    <div class="flex flex-col items-start h-full max-h-screen space-y-8 overflow-auto overflow-y-scroll scroll-smooth scrollbar-none">
      <!-- This should be the current artist -->
      <ArtistCircleCard class="w-[min(44vw)]" :name="artist ? artist.name : 'Empty'" :image="artist ? (artist.image as string) : '/image'" />

      <div class="flex flex-col items-start px-6 space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">
        <h2 class="text-xl font-bold text-white">Popular songs</h2>
        
        <ul class="flex flex-col gap-4">
        <li v-if="popularSongs ? popularSongs.length > 0 : undefined" v-for="(song, index) in popularSongs" :key="song.id" class="flex flex-row items-center gap-1">
          <p class="text-white">{{ index + 1 }}.</p>
          <SongCard @click="updateCurrentSong(song)" :songTitle="song.title" :albumTitle="album[0].title" />
        </li>
        <li v-else v-for="(_, index) in 5" :key="index" class="flex flex-row items-center gap-1">
          <p class="text-white">{{ index + 1 }}.</p>
          <SongCard songTitle="Empty" albumTitle="None" />
        </li>
      </ul>

      </div>

    </div>
  </main>  
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useAlbumStore } from '@/stores/album'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'
import { type User, type Song, type Album } from '@/types'

const route = useRoute()
const userStore = useUserStore()
const songStore = useSongStore()
const albumStore = useAlbumStore()
const { albums, albumsOfUser } = storeToRefs(albumStore)
const { getUserByName } = userStore
const { getAllSongsFromAlbumId, getAllAlbumsOfUser } = albumStore
const { updateCurrentSong } = songStore

const artist = ref<User>()
const songs = ref<Song[]>()

const popularSongs = computed(() => {
  return songs.value?.filter((_, index) => index < 5)
})

const album = computed(() => {
  return albums.value.filter((album, index) => album.user_name === route.params.name as string && index < 1)
})

watch(artist, async () => {
  await getAllAlbumsOfUser(Number(artist.value?.id))
})

watch(album, async () => {
  songs.value = await getAllSongsFromAlbumId(album.value[0].id)
})


onMounted(async () => {
  artist.value = await getUserByName(route.params.name as string)
  await getAllAlbumsOfUser(Number(artist.value?.id))
})

</script>
