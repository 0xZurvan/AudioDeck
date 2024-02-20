<template>
  <main class="flex flex-col space-y-6"> 

    <div class="flex flex-row justify-between">
      <h1 class="text-xl font-bold text-white">Artists</h1>
      <NuxtLink to="/artists" class="text-sm font-thin text-white hover:text-green-500 hover:opacity-90">View all</NuxtLink>
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
          <NuxtLink :to="'/artists/' + _users[index].name" v-if="index < _users.length">
            <SmallArtistCard :artistName="_users[index].name" :image="(_users[index].image as string)" />
          </NuxtLink>
          <template v-else>
            <SmallArtistCard artistName="Empty" image="/image" />
          </template>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    
  </main>
</template>

<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const _users = computed(() => {
  return users.value.slice(0, 10)
})

</script>
