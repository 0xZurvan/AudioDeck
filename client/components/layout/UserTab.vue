<template>
  <div class="flex flex-row items-center justify-start w-32 h-10 p-2 space-x-2 rounded-lg">
    <NuxtImg v-if="image !== '/image'" :src="image" preset="avatar" :placeholder="[8, 8, 75, 5]" class="w-8 h-8 rounded-full" />
    <div v-else class="w-8 h-8 rounded-full bg-neutral-950"></div>
    
    <p class="font-medium text-white hover:text-green-500">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
const { name, image } = defineProps<{
  name: string,
  image: string
}>()

</script>
