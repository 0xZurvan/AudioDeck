<template>
  <div class="flex flex-col items-start w-full space-y-8 h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <h2 class="text-xl font-bold text-white">Playlists</h2>
    
    <div v-for="playlist in 10" class="flex flex-col">
      <PlaylistCard playlistName="Anime music" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
