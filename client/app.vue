<template>
  <div>
    <button @click="handleAddAlbums">Add album</button>
    <button @click="handleReadAlbums">Read album</button>
    <ul v-for="(value, key) in albums" :key="key">
      <li v-if="key === 'title'">{{ value }}</li>
      <li v-if="key === 'artist'">{{ value }}</li>
      <li v-if="key === 'price'">{{ value }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

interface Album {
  id: string
	title: string
	artist: string
	price: number
}

const albums = ref<Album | undefined>(undefined)

const handleAddAlbums = async () => {
  try {
    const response = await axios.post('http:localhost:3001/albums', {
      id: "4",
      title: "The Modern Sound of Betty Carter",
      artist: "Betty Carter",
      price: 49.99
    })

    console.log('Post album response', response)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

const handleReadAlbums = async () => {
  try {
    const response = await axios.get('http:localhost:3001/albums')
    albums.value = response.data

    console.log('Albums', response)
  } catch (error) {
    throw error
  }
}


</script>