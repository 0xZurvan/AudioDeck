<template>
  <div class="flex flex-row items-center justify-around gap-4">
    <NuxtImg v-if="albumImg !== '/image'" :src="albumImg" preset="avatar" :placeholder="[12, 12, 75, 5]" class="w-12 h-12 rounded-lg" />
    <div v-else class="flex bg-neutral-950 w-[min(4vw)] h-[min(4vw)] rounded-lg"></div>
    
    <div class="flex flex-col">
      <p class="text-base font-medium text-white text-pretty">{{ albumTitle }}</p>
      <p class="text-sm font-thin text-white text-italic">Album</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { albumTitle, albumImg } = defineProps<{
  albumTitle: string
  albumImg: string
}>()
</script>
