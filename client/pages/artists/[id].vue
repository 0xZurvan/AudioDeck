<template>
  <main class="flex flex-row items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden rounded-lg py-4 px-8">

    <!-- Albums section -->
    <div class="flex flex-col space-y-10 h-full max-h-screen overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
      <h2 class="text-white text-xl font-bold">All albums from Kiron2X</h2>

      <ul class="flex flex-col justify-between space-y-4">
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]"  albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
        <li>
          <SmallAlbumCard class="hover:bg-m-dark w-[min(40vw)]" albumName="Lofi music" artistName="Kiron2X" albumLength="10" />
        </li>
      </ul>
    </div>

    <!-- Artist and recent songs section -->
    <div class="flex flex-col items-start space-y-[min(21vw)] h-full max-h-screen overflow-auto overflow-y-scroll scroll-smooth scrollbar-none">

      <!-- Artist card -->
      <div class="flex flex-row items-center justify-start space-x-8 position fixed right-0 bg-m-dark w-[min(44vw)] h-[min(20vw)] rounded-lg p-4">

        <div class="bg-green bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
           <!-- Artist image - TODO: replace div -->
          <div class="bg-s-dark position relative left-4 top-3 bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
          </div>
        </div>

        <div class="flex flex-col items-start">
          <h2 class="text-white text-xl font-bold">Kiron2X</h2>
          <p class="text-white text-sm">Artist</p>
        </div>

      </div>
      <!-- Artist card end -->

      <div class="flex flex-col items-start space-y-10 overflow-x-hidden overflow-y-scroll scroll-smooth scrollbar-none px-6">

        <ul class="flex flex-row justify-between items-center position fixed right-10 w-[min(40vw)]">
          <li class="text-white opacity-70 text-sm"># Song Name</li>
          <li class="text-white opacity-70 text-sm"># Album name</li>
          <li class="text-white opacity-70 text-sm"># Duration</li>
        </ul>

        <ul class="flex flex-col gap-4 position relative right-[-1vw] pb-2">
          <li>
            <SongCard  songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
          <li>
            <SongCard  songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
          <li>
            <SongCard  songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
          
        </ul>
      </div>

    </div>
  </main>  
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>