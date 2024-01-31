<template>
  <div class="flex flex-col items-start w-full h-[min(35vw)] space-y-8 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <h2 class="text-lg text-white">Albums</h2>
    
    <div v-for="playlist in 10" class="flex flex-col">
      <AlbumProfileCard albumName="Anime music" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
