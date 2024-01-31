<template>
<main class="flex flex-col items-start w-screen h-[min(35vw)] overflow-hidden space-y-6 overflow-y-auto scroll-smooth scrollbar-none">
  <div class="flex flex-row space-x-[min(10vw)]">
    
    <div class="flex flex-col gap-6">
      <h2 class="text-lg font-bold text-white">Create new album</h2>
      <AlbumForm />
    </div>
    
    <Separator class="bg-neutral-950" orientation="vertical" />
    
    <div class="flex flex-col gap-6">
      <h2 class="text-lg font-bold text-white">Add songs to album</h2>
      <SongForm />
    </div>
    
  </div>
</main>
</template>

<script setup lang="ts">

</script>
