<template>
 <div class="flex flex-row justify-start items-center bg-m-dark w-[max(18vw)] h-[min(7vw)] space-x-8 rounded-lg p-2 opacity-90 hover:shadow-xl">

    <div class="container w-[min(8vw)] h-[min(6vw)] bg-white rounded-lg"></div>

    <div class="flex flex-col items-start">
      <p class="text-white font-medium text-base">{{ albumName }}</p>
      <p class="text-white font-thin text-sm opacity-70 italic">{{ artistName }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
const { albumName, artistName, cover } = defineProps<{
  albumName: string,
  artistName: string,
  cover?: string
}>()
</script>
