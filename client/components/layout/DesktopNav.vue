<template>
  <div class="flex flex-row items-center justify-between">
    <div class="flex flex-row space-x-4">
      <!-- Logo -->
      <div class="w-32 h-10 rounded-lg bg-neutral-950"></div>
      <SearchBar />
    </div>
    <NuxtLink to="/profile">
      <UserTab />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>
