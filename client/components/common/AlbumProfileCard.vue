<template>
  <div class="flex flex-row items-center justify-around w-full gap-4">
    <div class="flex bg-neutral-950 w-[min(4vw)] h-[min(4vw)] rounded-lg"></div>
    
    <div class="flex flex-col">
      <p class="text-base font-medium text-white text-pretty">{{ albumName }}</p>
      <p class="text-sm font-thin text-white text-italic">Album</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { albumName } = defineProps<{
  albumName: string
}>()
</script>
