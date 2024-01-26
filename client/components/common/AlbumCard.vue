<template>
  <div class="flex flex-col gap-2">
    <div class="rounded-lg bg-neutral-950 w-[min(20vw)] h-[min(20vw)] hover:shadow-xl"></div>
    <div class="flex flex-col">
      <p class="text-base font-medium text-white text-pretty">{{ albumName }}</p>
      <p class="text-sm font-thin text-white text-italic">{{ artistName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { albumName, artistName, cover } = defineProps<{
  albumName: string,
  artistName?: string,
  cover?: string
}>()
</script>
