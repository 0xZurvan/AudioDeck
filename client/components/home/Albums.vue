<template>
  <div class="flex flex-col space-y-4 w-[min(84vw)]">

    <div class="flex flex-row justify-between">
      <h1 class="text-white text-xl font-bold">Albums</h1>
      <NuxtLink to="/albums" class="text-white text-sm hover:opacity-90 opacity-70 font-thin">View all</NuxtLink>
    </div>
    
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
</template>

<script setup lang="ts">

</script>
