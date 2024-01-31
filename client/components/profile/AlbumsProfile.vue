<template>
  <div class="flex flex-col items-start w-full h-[min(34vw)] space-y-8 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <div class="flex flex-row items-center gap-2">
      <h2 class="text-lg text-white">Albums</h2>
      <NuxtLink to="/upload">
        <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"/></svg>
      </NuxtLink>  
    </div>
    
    <div v-for="playlist in 10" class="flex flex-col">
      <AlbumProfileCard albumName="Anime music" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
