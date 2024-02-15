<template>
  <div class="flex flex-col items-start w-full space-y-8 h-[min(34vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <div class="flex flex-row items-center gap-2">
      <h2 class="text-lg text-white">Playlists</h2>
      <PlaylistDialog />
    </div>
    
    <div v-for="playlist in 10" class="flex flex-col items-start w-full gap-4">
      <PlaylistCard playlistName="Empty" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
