<template>
<div class="flex flex-row items-center justify-start gap-10 bg-black h-[min(20vw)] rounded-lg p-4">
  <NuxtImg v-if="img !== '/image'" :src="img" :placeholder="[12, 12, 75, 5]" class="position relative left-4 top-3 w-[min(12vw)] h-[min(12vw)] rounded-full" />
  <div v-else class="bg-neutral-950 position relative left-4 top-3 w-[min(12vw)] h-[min(12vw)] rounded-full"></div>

  <div class="flex flex-row items-start gap-7">
    <div class="flex flex-col">
      <h2 class="text-xl font-bold text-white">{{ name }}</h2>
      <p class="text-sm text-white">Artist</p>
    </div>
    <slot />
  </div>
</div>
</template>

<script setup lang="ts">
const { name } = defineProps<{
  name: string | undefined
  img: string
}>()

</script>