<template>
  <div class="flex flex-col gap-2">
    <NuxtImg v-if="image !== '/image'" :src="image" :placeholder="[12, 12, 75, 5]" class="w-[min(12vw)] h-[min(12vw)] rounded-lg hover:shadow-xl" />
    <div v-else class="rounded-lg bg-neutral-950 w-[min(12vw)] h-[min(12vw)] hover:shadow-xl"></div>
    <p class="text-base font-medium text-white text-pretty">{{ albumName }}</p>
  </div>
</template>
 
 <script setup lang="ts">
 const { albumName, image } = defineProps<{
   albumName: string,
   image: string
 }>()
 </script>
 