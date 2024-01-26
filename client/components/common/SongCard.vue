<template>
  <div class="flex flex-row justify-between items-center w-[min(40vw)] h-[min(4vw)] rounded-lg hover:bg-neutral-950 hover:py-4 px-4">
    <div class="flex flex-row items-center gap-2">
      <div class="w-[min(2vw)] h-[min(2vw)] bg-white rounded-lg"></div>
      <p class="text-white font-medium text-base">{{ songName }}</p>
    </div>
    <p class="text-white font-medium text-base">{{ albumName }}</p>
    <p class="text-white font-medium text-base">{{ duration }}</p>
   </div>
</template>
 
 <script setup lang="ts">
 const { songName, albumName, duration, cover } = defineProps<{
   songName: string,
   albumName: string,
   duration: string,
   cover?: string
 }>()
 </script>
 