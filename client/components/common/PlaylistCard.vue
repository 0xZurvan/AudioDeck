<template>
  <div class="flex flex-row items-center justify-around gap-4 w-fit">
    <div class="bg-neutral-950 w-[min(4vw)] h-[min(4vw)] rounded-lg"></div>
    
    <div class="flex flex-col">
      <p class="text-base font-medium text-white text-pretty">{{ playlistName }}</p>
      <p class="text-sm font-thin text-white text-italic">Playlist</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { playlistName } = defineProps<{
  playlistName: string
}>()
</script>
