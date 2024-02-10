<template>
  <div class="flex flex-row justify-around space-x-10 max-w-screen h-[min(35vw)] rounded-lg">
    <div class="flex flex-col items-start max-h-screen space-y-8 overflow-y-scroll scroll-smooth scrollbar-none">
      <h1 class="text-xl font-bold text-white">Album Songs</h1>

      <ul class="flex flex-row justify-center items-center space-x-[min(12vw)]">
        <li class="text-sm text-white opacity-70"># Song Name</li>
        <li class="text-sm text-white opacity-70"># Album name</li>
        <li class="text-sm text-white opacity-70"># Duration</li>
      </ul>

      <ul class="flex flex-col gap-4">
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
          <SongCard songName="Lofi" albumName="Lofi music" duration="3:14" albumLength="10" />
        </li>
      </ul>
    </div>

    <div class="flex flex-col items-start max-h-screen space-y-6 overflow-y-scroll rounded-lg scroll-smooth scrollbar-none">
          
      <div class="flex flex-row space-x-[16vw] items-start">
        <h3 class="text-base text-white text-pretty">Other albums from Kiron2X</h3>
        <p class="text-sm text-white text-pretty">View all</p>
      </div>
      
      <ul class="grid grid-cols-3 gap-4">
        <li>
          <div class="flex flex-col gap-2 justify-evenly j">
            <div class="rounded-lg bg-neutral-950 w-36 h-36 hover:shadow-xl"></div>
            <p class="text-sm font-medium text-white">Album name</p>
          </div>
        </li>
        <li>
          <div class="flex flex-col gap-2 justify-evenly j">
            <div class="rounded-lg bg-neutral-950 w-36 h-36 hover:shadow-xl"></div>
            <p class="text-sm font-medium text-white">Album name</p>
          </div>
        </li>
        <li>
          <div class="flex flex-col gap-2 justify-evenly j">
            <div class="rounded-lg bg-neutral-950 w-36 h-36 hover:shadow-xl"></div>
            <p class="text-sm font-medium text-white">Album name</p>
          </div>
        </li>
        
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>

