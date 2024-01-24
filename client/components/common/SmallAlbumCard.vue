<template>
  <div class="flex flex-row justify-start items-center w-[min(18vw)] h-[min(4vw)] space-x-4 rounded-lg p-2">
    <div class="w-[min(8vw)] h-[min(3vw)] bg-white rounded-lg"></div>
    <p class="text-white font-medium text-base">{{ albumName }}</p>
   </div>
</template>
 
 <script setup lang="ts">
 const { albumName, cover } = defineProps<{
   albumName: string,
   cover?: string
 }>()
 </script>
 