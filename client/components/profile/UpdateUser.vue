<template>
  <div class="flex flex-col h-[min(34vw)] px-4 space-y-4 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-track-transparent scrollbar-thumb-green-500 scrollbar-thin">
    <h2 class="text-lg text-white">Update information</h2>
    
    <UpdateUserName :userId="userId" />
    <UpdateUserPassword :userId="userId" />
    <UpdateUserImage :userId="userId" />
  </div>
</template>

<script setup lang="ts">
const userName = 'Shaidy HS'
const { data: user } = await useFetch(`/api/users/${userName}`)
// @ts-ignore
const userId = Number(user.value.User.id)

</script>
