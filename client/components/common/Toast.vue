<template>
  <div v-if="isVisible" class="flex flex-col gap-2 rounded-lg z-[100] position absolute top-10 right-20 bg-black shadow-sm p-8" :class="{ 'border-b-2 border-green-500' : type === 'success', 'border-b-2 border-red-500' : type === 'loading' }">
    <button @click="closeToast" class="text-white font-pretty position absolute right-2 top-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"/></svg>  
    </button>
    <p class="text-white font-pretty text-center">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import { storeToRefs } from 'pinia'

interface ToastProps {
  message: string
  type?: 'success' | 'loading'
}

const { message, type } = defineProps<ToastProps>()
const toastStore = useToastStore()
const { isVisible } = storeToRefs(toastStore)
const { toggleToast } = toastStore

onMounted(() => {
  toggleToast(true)
  setTimeout(() => {
    toggleToast(false)
  }, 10000)
})

const closeToast = () => {
  toggleToast(false)
}
</script>