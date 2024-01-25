<template>
  <main class="flex flex-col items-start space-y-10 bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg py-4 px-8">
    <h1 class="text-white text-2xl font-bold">Upload</h1>

    <div class="flex flex-row space-x-[min(21vw)]">
      <div class="flex flex-col space-y-10">
        <h2 class="text-white text-lg font-bold">Create new album</h2>
        <AlbumForm />
      </div>

      <div class="flex flex-col space-y-10">
        <h2 class="text-white text-lg font-bold">Add songs to album</h2>
        <SongForm />
      </div>

    </div>

  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>