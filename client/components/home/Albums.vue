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
        <CarouselItem v-for="(_, index) in 10" :key="index" class="basis-auto">
          <NuxtLink v-if="index < _albums.length" :to="'/albums/' + _albums[index].id">
            <SmallAlbumCard :albumTitle="_albums[index].title" :image="(_albums[index].image as string)" />
          </NuxtLink>
          <template v-else>
            <SmallAlbumCard albumTitle="Empty" image="/image" />
          </template>
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

const _albums = computed(() => {
  return albums.value.slice(0, 10)
})

</script>
