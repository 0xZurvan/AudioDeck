<template>
  <div class="flex flex-col gap-2">
    <div class="bg-m-dark w-20 h-20 rounded-lg"></div>
    <p class="text-white font-medium text-sm">{{ artistName }}</p>
  </div>
</template>

<script setup lang="ts">  
const { artistName, image } = defineProps<{
  artistName: string
  image?: string
}>()

</script>
