<template>
    <div class="flex flex-col">
      <div class="flex flex-row space-x-36">
        <div class="flex flex-col space-y-10">
          <div class="bg-s-dark w-32 h-10 rounded-lg"></div>
          <DesktopNav />
        </div>
        <div class="flex flex-col space-y-10">
          <SearchBar />
          <SongPlayer />

          <slot />
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>