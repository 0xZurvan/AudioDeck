<template>
  <div class="relative z-[100]">
    <div class="flex flex-row bg-neutral-950 w-[min(30vw)] h-10 rounded-xl px-4 py-2">
      <input
        type="text"
        class="w-full h-full text-white placeholder-white bg-transparent outline-none placeholder-opacity-70"
        placeholder="Search album or artist"
        @input="handleInput"
        @blur="hideResults"
        @focus="showResults"
        v-model="searchQuery"
      />
    </div>
    
    <div v-if="results" class="flex flex-col absolute bg-neutral-950 w-[min(30vw)] h-fit max-h-[min(12vw)] mt-1 rounded-lg shadow-xl overflow-hidden overflow-y-scroll scrollbar-none">
      <NuxtLink v-for="result in filteredResults" :key="result.id" :to="getResultRoute(result)" class="w-full p-2 text-white rounded-lg hover:bg-black hover:bg-opacity-40">
        {{ getResultValue(result) }}
      </NuxtLink>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useAlbumStore } from '@/stores/album'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

interface SearchResult {
  id: number
  title?: string
  name?: string
}

const results = ref(false)
const searchQuery = ref('')

const albumsStore = useAlbumStore()
const userStore = useUserStore()
const { albums } = storeToRefs(albumsStore)
const { users } = storeToRefs(userStore)

const filteredResults = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  
  const filteredAlbums = query ? albums.value.filter(album => album.title.toLowerCase().includes(query)) : []
  const filteredUsers = query ? users.value.filter(user => user.name.toLowerCase().includes(query)) : []

  return [...filteredAlbums, ...filteredUsers]
})

const handleInput = () => {
  results.value = true
}

const showResults = () => {
  results.value = true
}

const hideResults = () => {
  results.value = false
}

const getResultValue = (result: SearchResult) => {
  return result.title ? result.title : result.name
}

const getResultRoute = (result: SearchResult) => {
  if (result.title) {
    navigateTo(`/albums/${result.id}`)
    return `/albums/${result.id}`
  } else if (result.name) {
    navigateTo(`/artists/${result.name}`)
    return `/artists/${result.name}`
  } else {
    return '/'
  }
}

</script>
