<template>
  <main class="flex flex-row justify-around max-w-screen h-[min(35vw)] space-x-10 overflow-hidden rounded-lg">

    <!-- Albums section -->
    <div class="flex flex-col h-full max-h-screen space-y-10 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
      <h2 class="text-xl font-bold text-white">All albums from Kiron2X</h2>

      <ul class="grid grid-cols-3 gap-4">
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
        <li>
          <SmallAlbumCard albumName="Lofi music" />
        </li>
      </ul>
    </div>

    <!-- Artist and recent songs section -->
    <div class="flex flex-col items-start h-full max-h-screen space-y-8 overflow-auto overflow-y-scroll scroll-smooth scrollbar-none">
      <!-- This should be the current artist -->
      <ArtistCircleCard class="w-[min(44vw)]" :name="user.name" :img="(user.image as string)" />

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
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

</script>
