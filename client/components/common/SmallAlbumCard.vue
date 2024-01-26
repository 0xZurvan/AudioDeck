<template>
  <div class="flex flex-col gap-2">
    <div class="rounded-lg bg-neutral-950 w-[min(12vw)] h-[min(12vw)] hover:shadow-xl"></div>
    <p class="text-base font-medium text-white text-pretty">{{ albumName }}</p>
  </div>
</template>
 
 <script setup lang="ts">
 const { albumName, cover } = defineProps<{
   albumName: string,
   cover?: string
 }>()
 </script>
 