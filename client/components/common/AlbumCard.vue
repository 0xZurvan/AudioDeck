<template>
 <div class="flex flex-col items-start rounded-lg gap-2">
    <div class="bg-m-dark w-32 h-20 rounded-lg"></div>

    <div class="flex flex-col items-start">
      <p class="text-white font-medium text-base">{{ albumName }}</p>
      <p class="text-white font-thin text-sm opacity-70 italic">{{ artistName }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
const { albumName, artistName, albumLength, cover } = defineProps<{
  albumName: string,
  artistName: string,
  albumLength: number,
  cover?: string
}>()
</script>
