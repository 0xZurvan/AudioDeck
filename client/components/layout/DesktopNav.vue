<template>
  <div class="flex flex-row items-center justify-between">
    <div class="flex flex-row space-x-4">
      <!-- Logo -->
      <div class="w-32 h-10 rounded-lg bg-neutral-950"></div>
      <SearchBar />
    </div>
    <NuxtLink v-show="user" to="/profile">
      <UserTab />
    </NuxtLink>
    
    <div v-show="!user" class="flex flex-row items-center gap-4">
      <NuxtLink to="/sign-in">
        <Button variant="outline" class="w-full text-white border-none bg-neutral-950">Sign in</Button>
      </NuxtLink>
      <NuxtLink to="/sign-up">
        <Button class="w-full bg-green-500 hover:bg-neutral-950">Sign up</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

</script>
