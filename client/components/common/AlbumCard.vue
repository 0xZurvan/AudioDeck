<template>
  <div class="flex flex-col gap-2">
    <NuxtImg v-if="image !== '/image'" :src="image" :placeholder="[20, 20, 75, 5]" class="w-[min(20vw)] h-[min(20vw)] hover:shadow-xl rounded-lg" />
    <div v-else class="rounded-lg bg-neutral-950 w-[min(20vw)] h-[min(20vw)] hover:shadow-xl"></div>
    
    <div class="flex flex-row items-start justify-between">
      <div class="flex flex-col">
        <p class="text-base font-medium text-white text-pretty">{{ albumName }}</p>
        <p class="text-sm font-thin text-white text-opacity-70 text-italic text-pretty">{{ artistName }}</p>
      </div>
      <Badge class="text-sm text-green-500 rounded-full w-fit text-pretty" variant="outline">{{ category }}</Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
const { albumName, artistName, category, image } = defineProps<{
  albumName: string,
  artistName: string,
  category: string
  image: string
}>()

</script>
