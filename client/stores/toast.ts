import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', () => {
  // State 
  const isVisible = ref(false)

  // Actions 
  function toggleToast(value: boolean) {
    isVisible.value = value
  }

  return {
    isVisible,
    toggleToast
  }
})