<template>
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout class="flex flex-row justify-around mx-4 my-4">
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer />
  </div>
</template>

<script setup lang="ts">

// import { User } from '~/types'
/* const { data: users } = await useFetch('/api/users', {
  transform: (users: User[]) => {
    return users.map((user: User) => ({
      id: user.id,
      name: user.name,
      image: user.image
    }))
  }
}) */

</script>