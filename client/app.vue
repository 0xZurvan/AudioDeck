<template>
  <div>
    <button @click="handleAddAlbums">Add album</button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const handleAddAlbums = async () => {
  try {
    const response = await axios.post('http:localhost:5173/albums', {
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

</script>