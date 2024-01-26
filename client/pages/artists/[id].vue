<template>
  <main class="flex flex-row justify-around max-w-screen h-[min(35vw)] space-x-10 overflow-hidden rounded-lg">

    <!-- Albums section -->
    <div class="flex flex-col h-full max-h-screen space-y-10 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
      <h2 class="text-xl font-bold text-white">All albums from Kiron2X</h2>

      <ul class="flex flex-col space-y-4">
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
    <div class="flex flex-col items-start h-full max-h-screen space-y-8 overflow-auto overflow-y-scroll scroll-smooth scrollbar-none">

      <!-- Artist card -->
      <div class="flex flex-row items-center justify-start space-x-8 bg-black w-[min(44vw)] h-[min(20vw)] rounded-lg p-4">

        <div class="bg-green-500 bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
           <!-- Artist image - TODO: replace div -->
          <div class="bg-neutral-950 position relative left-4 top-3 bg-opacity-90 w-[min(12vw)] h-[min(12vw)] rounded-full">
          </div>
        </div>

        <div class="flex flex-col items-start">
          <h2 class="text-xl font-bold text-white">Kiron2X</h2>
          <p class="text-sm text-white">Artist</p>
        </div>

      </div>
      <!-- Artist card end -->

      <div class="flex flex-col items-start px-6 space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">

        <ul class="flex flex-row justify-between items-center w-[min(40vw)]">
          <li class="text-sm text-white opacity-70"># Song Name</li>
          <li class="text-sm text-white opacity-70"># Album name</li>
          <li class="text-sm text-white opacity-70"># Duration</li>
        </ul>

        <ul class="flex flex-col gap-4">
          <li>
            <SongCard songName="Lofi" albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
          <li>
            <SongCard songName="Lofi" albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
          <li>
            <SongCard songName="Lofi" albumName="Lofi music" duration="3:14" albumLength="10" />
          </li>
        </ul>

      </div>

    </div>
  </main>  
</template>

<script setup lang="ts">


</script>
