<template>
  <div class="flex flex-col items-start space-y-6">
    <ClientOnly>
      <h2 class="text-2xl font-bold text-white">Menu</h2>
      <ul class="flex flex-col space-y-4">
        <NuxtLink to="/" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75 hover:text-green-500">Home</NuxtLink>
        <NuxtLink to="/albums" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75 hover:text-green-500 ">Albums</NuxtLink>
        <NuxtLink to="/artists" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75 hover:text-green-500 ">Artists</NuxtLink>
        <NuxtLink v-if="user.id !== 0 || user.name !== ''" to="/upload" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75 hover:text-green-500 ">Upload</NuxtLink>
      </ul>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

</script>
