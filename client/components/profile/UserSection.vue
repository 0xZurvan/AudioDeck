<template>
  <main class="flex flex-col items-start space-y-10 w-full h-[min(35vw)] overflow-hidden">
    <ArtistCircleCard class="w-[min(50vw)] py-8" :image="(user.image as string)" :name="user.name">
      <UploadUserImage />
    </ArtistCircleCard>
    <UpdateUser />
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>