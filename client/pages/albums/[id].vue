<template>
  <div class="flex flex-row justify-between items-start bg-s-dark w-screen h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none rounded-lg py-4 px-8">
    <div class="flex flex-col items-start space-y-8">
      <h1 class="text-white text-xl font-bold">Album Songs</h1>

      <ul class="flex flex-row justify-between items-center w-[min(40vw)]">
        <li class="text-white opacity-70 text-sm"># Song Name</li>
        <li class="text-white opacity-70 text-sm"># Album name</li>
        <li class="text-white opacity-70 text-sm"># Duration</li>
      </ul>

      <ul class="flex flex-col w-full gap-4 overflow-y-scroll scroll-smooth scrollbar-none pb-2">
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard  songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
        <li class="flex flex-row items-center gap-1">
          <p class="text-white">1.</p>
          <SongCard songName="Lofi"  albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
      </ul>
    </div>

    <div class="position fixed right-0 bg-m-dark w-[min(44vw)] h-[min(32vw)] rounded-lg p-4">
      <div class="flex flex-col w-[min(44vw)] h-[min(32vw)] rounded-lg">

        <div class="bg-s-dark w-[min(44vw)] h-[min(10vw)] rounded-lg">
          <h3 class="text-white text-2xl text-pretty p-2">Kiron2X</h3>
        </div>

        <div class="flex flex-col justify-center space-y-6 py-4">
          <div class="flex flex-row space-x-[20vw] items-center">
            <h3 class="text-white text-base text-pretty">Other albums from Kiron2X</h3>
            <p class="text-white text-sm text-pretty">View all</p>
          </div>

          <ul class="grid grid-cols-2 gap-4">
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
            <li>
              <SmallAlbumCard albumName="Lofi music" albumLength="10" />
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>

<style scoped>

</style>