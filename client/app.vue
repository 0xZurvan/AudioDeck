<template>
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer :class="{'hidden': isLoginRoute === true }" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isLoginRoute = computed(() => {
  return route.path === '/sign-in' || route.path === '/sign-up' ? true : false
})

provide('isLoginRoute', isLoginRoute)

const name = 'Isaac'
const { data: user } = await useFetch(`/api/users/${name}`)
// @ts-ignore
const userId = user.value.User.id
// @ts-ignore
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