<template>
  <div class="flex flex-col justify-evenly j gap-2">
    <div class="bg-m-dark w-36 h-36 rounded-lg hover:shadow-xl"></div>
    <p class="text-white font-medium text-sm">{{ artistName }}</p>
  </div>
</template>

<script setup lang="ts">  
const { artistName, image } = defineProps<{
  artistName: string
  image?: string
}>()

</script>
