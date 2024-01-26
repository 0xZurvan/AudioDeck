<template>
  <div class="flex flex-col items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg">
    <div class="flex flex-col space-y-10 w-[min(84vw)]">

      <h1 class="text-xl font-bold text-white">Albums</h1>

      <div class="flex flex-col gap-2">
        <p class="p-2 text-sm font-medium text-white rounded-full text-opacity-70"># Category</p>

        <ul class="flex flex-row items-center justify-between">
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-2">
        <p class="p-2 text-sm font-medium text-white rounded-full text-opacity-70"># Category</p>

        <ul class="flex flex-row items-center justify-between">
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
        </ul>
      </div>
      
      <div class="flex flex-col gap-2">
        <p class="p-2 text-sm font-medium text-white rounded-full text-opacity-70"># Category</p>

        <ul class="flex flex-row items-center justify-between">
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
          <li>
            <AlbumCard albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>