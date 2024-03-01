<template>
  <div class="flex flex-col items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg">
    <div class="flex flex-col space-y-10 w-[min(84vw)]">

      <h1 class="text-xl font-bold text-white">Albums</h1>

      <ul class="grid justify-between grid-cols-4 gap-4">
        <li v-for="album in _albums" :key="album.id">
          <NuxtLink :to="'/albums/' + album.id">
            <AlbumCard :albumName="album.title" :artistName="album.user_name" :image="(album.image as string)" :category="album.category" />
          </NuxtLink>
        </li>
        <li v-if="_albums.length < 10" v-for="n in 10 - _albums.length" :key="'empty-' + n">
          <AlbumCard albumName="Empty" artistName="None" image="/image" category="None" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/stores/album'
import { storeToRefs } from 'pinia'

const albumStore = useAlbumStore()
const { albums } = storeToRefs(albumStore)

const _albums = albums.value.slice(0, 10)
</script>
