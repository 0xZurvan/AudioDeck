<template>
  <main class="flex flex-col items-start space-y-10 h-[min(35vw)] overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none">
    <ArtistCircleCard class="py-6" name="Kiron2X" />
    <div class="flex flex-row items-baseline justify-around">
      <UpdateUserData />
      <ul class="flex flex-row">
        <NuxtLink to="/upload">
          <Button variant="link" class="text-sm text-white hover:text-green-500 text-pretty">Create new album</Button>
        </NuxtLink>
        <Button variant="link" class="text-sm text-white hover:text-green-500 text-pretty">Create new playlist</Button>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>