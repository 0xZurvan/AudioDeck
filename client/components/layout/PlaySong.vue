<template>
  <audio :src="audio" autoplay="true" controlsList="nodownload" controls class="audio"></audio>
</template>

<script setup lang="ts">
const { audio } = defineProps<{
  audio?: string
}>()
</script>

<style scoped>
audio{
  height: 50px;
  width: 50vw;
}

</style>


