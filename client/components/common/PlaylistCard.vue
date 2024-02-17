<template>
  <div class="flex flex-row hover:bg-neutral-950 w-[min(14vw)] h-[min(3vw)] p-2 rounded-lg gap-2">
    <p class="text-base font-medium text-white text-pretty">{{ index }}.</p>
    <p class="text-base font-medium text-white text-pretty">{{ playlistName }}</p>
  </div>
</template>

<script setup lang="ts">
const { playlistName, index } = defineProps<{
  playlistName: string
  index?: number
}>()
</script>
