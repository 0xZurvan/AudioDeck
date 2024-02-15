<template>
  <main class="flex flex-col space-y-6"> 

    <div class="flex flex-row justify-between">
      <h1 class="text-xl font-bold text-white">Albums</h1>
      <NuxtLink to="/albums" class="text-sm font-thin text-white hover:text-green-500 hover:opacity-90">View all</NuxtLink>
    </div>
    
    <Carousel
    class="relative w-[min(80vw)]"
    :opts="{
      align: 'start',
    }"
    :plugins="[Autoplay({
      delay: 2000,
    })]"
    >
      <CarouselContent>
        <CarouselItem v-if="albums.length > 0" v-for="album in albums" :key="album.id" class="basis-auto">
          <SmallAlbumCard :albumTitle="album.title" :image="(album.image as string)" />
        </CarouselItem>
        <CarouselItem v-else v-for="(_, index) in 10" :key="index" class="basis-auto">
          <SmallAlbumCard albumTitle="Empty" image="/image" />
        </CarouselItem>
      </CarouselContent>
      
    </Carousel>

  </main>
</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { useAlbumStore } from '@/stores/album'
import { storeToRefs } from 'pinia'

const albumStore = useAlbumStore()
const { albums } = storeToRefs(albumStore)

</script>
