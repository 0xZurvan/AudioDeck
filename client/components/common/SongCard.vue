<template>
  <div class="flex flex-row justify-between items-center w-[min(40vw)] h-[min(4vw)] rounded-lg hover:bg-neutral-950 px-4">
      
    <div class="flex flex-row items-center gap-2">
      <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
      <p class="text-base font-medium text-white">{{ songTitle }}</p>
    </div>
    
    <p v-show="albumTitle" class="text-base font-thin text-white text-opacity-70">{{ albumTitle }}</p>

    <!-- Remove button with trash icon -->
    <button v-if="isRemove">
      <svg class="text-white hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z" fill="currentColor"/></svg>    </button>
    <!-- Add dialog with plus icon -->
    <SaveSongDialog v-else :songId="songId" />
  </div>
</template>
 
<script setup lang="ts">
const { songTitle, albumTitle, songId } = defineProps<{
  songTitle: string,
  albumTitle?: string | undefined,
  songId: number
}>()

const route = useRoute()

const isRemove = computed(() => {
  return route.path === `/playlists/${route.params.id}` && songTitle !== 'Empty' && songId !== 0 ? true : false
})

 
</script>
 