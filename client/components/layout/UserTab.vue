<template>
  <div class="flex flex-row items-center justify-start w-32 h-10 p-2 space-x-2 rounded-lg">
    <img :src="(user?.image as string)" class="w-8 h-8 bg-white rounded-full" />
    <p class="font-medium text-white hover:text-green-500">{{ user?.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>
