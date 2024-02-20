<template>
  <div class="flex flex-col items-start w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <div class="flex flex-col space-y-10 w-[min(84vw)]">

      <h1 class="text-xl font-bold text-white">Artists</h1>

      <ul class="grid justify-between grid-cols-4 gap-4">
        <li v-if="users.length > 0" v-for="user in users" :key="user.id" >
          <NuxtLink :to="'/artists/' + (user ? user.name : '')">
            <ArtistCard :artistName="user.name" :image="(user.image as string)" />
          </NuxtLink>
        </li>
        <li v-else v-for="(_, index) in 10" :key="index" >
          <ArtistCard artistName="Empty" image="/image" />
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

</script>
