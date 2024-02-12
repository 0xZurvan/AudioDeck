<template>
  <main class="flex flex-col items-start space-y-10 h-[min(35vw)] overflow-hidden">
    <ArtistCircleCard class="w-[min(36vw)] py-8" :img="isImage" :name="user.name">
      <UploadUserImage />
    </ArtistCircleCard>
    <UpdateUser />
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, isImage } = storeToRefs(userStore)
</script>