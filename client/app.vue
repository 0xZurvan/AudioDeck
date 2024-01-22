<template>
  <div class="flex flex-col space-y-[10px] h-screen">
    <div class="flex flex-row w-screen h-screen overflow-hidden">

<NuxtLayout class="flex flex-row m-10">
  <NuxtPage class="w-[min(44vw)]" />
</NuxtLayout>

<div class="flex flex-col my-10 h-screen space-y-2">
  <UserTab />
  <OutputPanel />
</div>

</div>
<SongPlayer class="" />
  </div>
</template>

<script setup lang="ts">

</script>