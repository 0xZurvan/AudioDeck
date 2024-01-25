<template>
  <main>
    <form class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label class="text-white italic">Album title</label>
        <input class="text-white bg-m-dark bg-opacity-90 rounded-lg p-2" type="text" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white italic">Album cover</label>
        <input class="text-white bg-m-dark bg-opacity-90 rounded-lg p-2" type="file" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-white italic">Category</label>
        <input class="text-white bg-m-dark bg-opacity-90 rounded-lg p-2" type="text" />
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">

</script>

