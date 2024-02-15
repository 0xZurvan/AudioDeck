<template>
  <div class="flex flex-row items-center gap-4">
    <NuxtImg v-if="albumImg !== '/image'" :src="albumImg" preset="avatar" :placeholder="[8, 8, 75, 5]" class="w-8 h-8 rounded-lg" />
    <div v-else class="w-10 h-10 rounded-lg bg-neutral-950"></div>
    
    <div class="flex flex-col">
      <h3 class="text-lg font-bold text-white">{{ songTitle }}</h3>
      <p class="text-[12px] font-thin text-white opacity-70">{{ artistName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { songTitle, artistName, albumImg } = defineProps<{
  songTitle: string,
  artistName: string,
  albumImg: string
}>()

</script>
