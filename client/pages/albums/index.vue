<template>
  <div class="flex flex-col items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg py-4 pb-16 px-8">
    <div class="flex flex-col space-y-10 w-[min(84vw)]">

      <h1 class="text-white text-xl font-bold">Albums</h1>

      <div class="flex flex-col gap-2">
        <p class="text-white text-sm font-medium rounded-full p-2"># Category</p>

        <ul class="flex flex-row justify-between items-center">
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
        <p class="text-white text-sm font-medium rounded-full p-2"># Category</p>

        <ul class="flex flex-row justify-between items-center">
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
        <p class="text-white text-sm font-medium rounded-full p-2"># Category</p>

        <ul class="flex flex-row justify-between items-center">
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