<template>
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout class="flex flex-row justify-around mx-4 my-4">
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer />
  </div>
</template>

<script setup lang="ts">

const name = 'Isaac'
const { data: user } = await useFetch(`/api/users/${name}`)
// @ts-ignore
const userId = user.value.User.id
const userName = user.value.User.name

provide('userId', userId as number)
provide('userName', userName as string)

/* import { type User } from '@/types'
const { data: users } = await useFetch('/api/users/all', {
  transform: (users: User[]) => {
    return users.map((user: User) => ({
      id: user.id,
      name: user.name,
      image: user.image
    }))
  }
})

console.log('users', users.value) */

</script>