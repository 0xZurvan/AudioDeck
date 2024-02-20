<template>
  <Dialog>
    <DialogTrigger as-child>
      <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"/></svg>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] bg-neutral-950 text-green-500">
      <DialogHeader>
        <DialogTitle class="text-white">Add song to playlist</DialogTitle>
        <DialogDescription>
          Add song to a playlist to collect your favorite songs. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      
      <FormField v-slot="{ componentField }" name="playlistId">
        <FormItem>
          <FormLabel class="text-white">Playlists</FormLabel>
        
          <Select v-bind="componentField">
            <FormControl>
              <SelectTrigger>
                <SelectValue class="text-neutral-950" placeholder="Select an album" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="playlist in connectedUserPlaylists" :value="playlist.id.toString()">
                  {{ playlist.name }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <DialogFooter>
        <Button @click="onSubmit" v-show="!isSubmitting" class="bg-green-500" size="sm">  
          Save song
        </Button>
    
        <Button v-show="isSubmitting" disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          Saving
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next'
import { usePlaylistStore } from '@/stores/playlist'
import { storeToRefs } from 'pinia'

const { songId } = defineProps<{
  songId: number
}>()

const playlistStore = usePlaylistStore()
const { connectedUserPlaylists } = storeToRefs(playlistStore)
const { getPlaylistsFromUserId } = playlistStore

const isSubmitting = ref(false)

const formSchema = toTypedSchema(z.object({
  playlistId: z.string({
    required_error: 'Please select a playlist.',
  })
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  
  try {
    await $fetch('/api/playlists/songs/add', {
      method: 'POST',
      body: {
        playlist_id: Number(values.playlistId),
        song_id: Number(songId)
      }
    })
    
    isSubmitting.value = false
  } catch (error) {
    console.error(error)
  }
})

onMounted(async () => {
  await getPlaylistsFromUserId()
})

</script>

