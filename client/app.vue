<template>
  <div class="flex flex-col justify-between w-screen h-screen max-h-screen overflow-hidden">
    <NuxtLayout class="flex flex-row justify-around mx-4 my-4">
      <NuxtPage />
    </NuxtLayout>

    <SongPlayer />
  </div>
</template>

<script setup lang="ts">

interface User {
  id: string;
  name: string;
  image: Uint8Array | null;
}

const { data: users } = await useFetch('/api/users', {
  transform: (users: User[]) => {
    return users.map((user: User) => ({
      id: user.id,
      name: user.name,
      image: user.image
    }))
  }
})

const userName = 'Shaidy';
const { data: user } = await useFetch(`/api/user/?name=${userName}`)
console.log('user', user.value)

</script>