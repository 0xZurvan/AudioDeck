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
        <CarouselItem v-if="users.length > 0" v-for="user in users" :key="user.id" class="basis-auto">
          <SmallArtistCard :artistName="user.name" :image="(user.image as string)" />
        </CarouselItem>
        <CarouselItem v-else v-for="i in 10" class="basis-auto">
          <SmallArtistCard artistName="Empty" image="/image" />
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


</script>
