<template>
<main class="flex flex-col items-start space-y-10 w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg pb-10">
  <div class="flex flex-row space-x-[min(10vw)]">
    
    <div class="flex flex-col space-y-10">
      <h2 class="text-lg font-bold text-white">Create new album</h2>
      <AlbumForm />
    </div>
    
    <Separator class="bg-neutral-950" orientation="vertical" />
    
    <div class="flex flex-col space-y-10">
      <h2 class="text-lg font-bold text-white">Add songs to album</h2>
      <SongForm />
    </div>
    
  </div>
</main>
</template>

<script setup lang="ts">

</script>
