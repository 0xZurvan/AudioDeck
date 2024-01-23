<template>
  <div class="flex flex-col items-start space-y-6">
    <h2 class="text-white text-2xl font-bold">Menu</h2>
    <ul class="flex flex-col space-y-4">
      <NuxtLink to="/" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75">Home</NuxtLink>
      <NuxtLink to="/albums" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75">Albums</NuxtLink>
      <NuxtLink to="/artists" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75">Artists</NuxtLink>
      <NuxtLink to="/playlists" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75">Playlists</NuxtLink>
      <NuxtLink to="/upload" class="text-white text-[min(15px)] hover:opacity-100 font-normal opacity-75">Upload</NuxtLink>
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>
