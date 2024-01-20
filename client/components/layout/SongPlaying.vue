<template>
  <div class="flex flex-row items-center gap-4">
    <div v-if="!src" class="w-10 h-10 bg-m-dark rounded-lg"></div>
    <img v-if="src" :src="src" >
    <div class="flex flex-col">
      <h3 class="text-white font-bold text-lg">{{ songName }}</h3>
      <p class="text-white opacity-70 font-thin text-sm">{{ artistName }}</p>
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
