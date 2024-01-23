<template>
  <div class="flex flex-col space-y-6 w-[min(84vw)]"> 

    <div class="flex flex-row justify-between">
      <h1 class="text-white text-xl font-bold">Artists</h1>
      <NuxtLink to="Artists" class="text-white text-sm opacity-70 hover:opacity-90 font-thin">View all</NuxtLink>
    </div>

    <ul class="flex flex-row justify-between items-start">
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
      <li>
        <ArtistCard artistName="Kiron2X" />
      </li>
    </ul>
  </div>

</template>

<script setup lang="ts">


</script>
