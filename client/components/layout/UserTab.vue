<template>
  <div class="flex flex-row items-center justify-start w-32 h-10 p-2 space-x-2 rounded-lg">
    <NuxtImg v-show="isImage !== '/image'" :src="isImage" preset="avatar" :placeholder="[8, 8, 75, 5]" class="w-8 h-8 rounded-full" />
    <div v-show="isImage === '/image'" class="w-8 h-8 bg-white rounded-full"></div>
    
    <p class="font-medium text-white hover:text-green-500">{{ user?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { user, isImage } = storeToRefs(userStore)

</script>
