<template>
  <div class="flex flex-row items-center gap-4">
    <div v-if="!src" class="w-10 h-10 rounded-lg bg-neutral-950"></div>
    <img v-if="src" :src="src" >
    <div class="flex flex-col">
      <h3 class="text-lg font-bold text-white">{{ songName }}</h3>
      <p class="text-sm font-thin text-white opacity-70">{{ artistName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { songName, artistName, src } = defineProps<{
  songName: string,
  artistName: string,
  src?: string
}>()

</script>
