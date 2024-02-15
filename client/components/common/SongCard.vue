<template>
  <div class="flex flex-row justify-start items-center space-x-[min(12vw)] w-[min(40vw)] h-[min(4vw)] rounded-lg hover:bg-neutral-950 hover:py-4 px-4">
    <div class="flex flex-row items-center gap-2">
      <div class="w-[min(2vw)] h-[min(2vw)] bg-white rounded-lg"></div>
      <p class="text-base font-medium text-white">{{ songTitle }}</p>
    </div>
    <p class="text-base font-medium text-white">{{ albumTitle }}</p>
   </div>
</template>
 
 <script setup lang="ts">
 const { songTitle, albumTitle } = defineProps<{
   songTitle: string,
   albumTitle: string | undefined,
 }>()
 </script>
 