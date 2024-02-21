<template>
  <audio id="player" :src="audio" autoplay @timeupdate="updateTimeAndProgress" @play="handlePlay" @pause="handlePause" @loadedmetadata="handleLoadedMetadata"></audio>
  <div class="flex items-center justify-center">
    <button v-if="!isPlaying" class="mr-4 text-white" @click="play">
      <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m74.77 217.3l-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6"/></svg>
    </button>
    <button v-if="isPlaying" class="mr-4 text-white" @click="pause">
      <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z"/></svg>
    </button>
    <div class="relative w-[min(30vw)] h-[4px] rounded-full bg-neutral-950">
      <div class="absolute top-0 left-0 h-full bg-green-500 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="ml-4 text-sm text-white">{{ currentTime }} / {{ duration }}</div>
  </div>
</template>

<script setup lang="ts">
const { audio } = defineProps<{
  audio: string
}>()

const currentTime = ref('0:00')
const duration = ref('0:00')
const progress = ref(0)
const isPlaying = ref(false)

const play = () => {
  const player = document.getElementById('player') as HTMLAudioElement
  player.play()
}

const pause = () => {
  const player = document.getElementById('player') as HTMLAudioElement
  player.pause()
}

const handlePlay = () => {
  isPlaying.value = true
}

const handlePause = () => {
  isPlaying.value = false
}

const handleLoadedMetadata = () => {
  const player = document.getElementById('player') as HTMLAudioElement
  if(player.duration) duration.value = formatTime(player.duration)
}

const updateTimeAndProgress = () => {
  const player = document.getElementById('player') as HTMLAudioElement
  currentTime.value = formatTime(player.currentTime)
  progress.value = (player.currentTime / player.duration) * 100
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

onMounted(() => {
  handleLoadedMetadata()
})
</script>
