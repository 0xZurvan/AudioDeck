<template>
  <div class="flex flex-col gap-2">
    <NuxtImg v-if="image !== '/image'" :src="image" :placeholder="[20, 20, 75, 5]" class="w-[min(20vw)] h-[min(20vw)] hover:shadow-xl rounded-lg" />
    <div v-else class="rounded-lg bg-neutral-950 w-[min(20vw)] h-[min(20vw)] hover:shadow-xl"></div>
    <p class="text-base font-medium text-white text-pretty">{{ artistName }}</p>
  </div>
</template>

<script setup lang="ts">  
const { artistName, image } = defineProps<{
  artistName: string
  image: string
}>()

</script>
