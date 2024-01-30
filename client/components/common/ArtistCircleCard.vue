<template>
<div class="flex flex-row items-center justify-start space-x-8 bg-black w-[min(44vw)] h-[min(20vw)] rounded-lg p-4">
  <div class="bg-green-500 bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
     <!-- Artist image - TODO: replace div -->
    <div class="bg-neutral-950 position relative left-4 top-3 bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
    </div>
  </div>

  <div class="flex flex-col items-start">
    <h2 class="text-xl font-bold text-white">{{name}}</h2>
    <p class="text-sm text-white">Artist</p>
  </div>
</div>
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string
}>()

</script>