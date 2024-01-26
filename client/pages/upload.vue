<template>
  <main class="flex flex-col items-start space-y-10 w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg">
    <h1 class="text-2xl font-bold text-white">Upload</h1>

    <div class="flex flex-row space-x-[min(21vw)]">
      <div class="flex flex-col space-y-10">
        <h2 class="text-lg font-bold text-white">Create new album</h2>
        <AlbumForm />
      </div>

      <div class="flex flex-col space-y-10">
        <h2 class="text-lg font-bold text-white">Add songs to album</h2>
        <SongForm />
      </div>

    </div>

  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>