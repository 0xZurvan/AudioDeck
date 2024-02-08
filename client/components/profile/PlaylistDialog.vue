<template>
  <Dialog>
    <DialogTrigger as-child>
        <svg class="text-white hover:text-green-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v160m80-80H176"/></svg>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] bg-neutral-950 text-green-500">
      <DialogHeader>
        <DialogTitle class="text-white">Create a new playlist</DialogTitle>
        <DialogDescription>
          Create a playlist to add your favorite songs. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      
      <form>
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel class="text-white">Playlist name</FormLabel>
            
            <FormControl >
              <Input type="text" placeholder="Add playlist name" v-bind="componentField" />
            </FormControl>

          <FormMessage />
          </FormItem>
        </FormField>
      </form>
      
      <DialogFooter>
        <Button @click="onSubmit" v-show="!isSubmitting" class="bg-green-500" size="sm">  
          Add new playlist
        </Button>
    
        <Button v-show="isSubmitting" disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          Uploading playlist
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'

const userId = inject('userId')
const isSubmitting = ref(false)

const formSchema = toTypedSchema(z.object({
  name: z.string({
    required_error: 'Please add a name for the playlist.', 
  }).min(5).max(14),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    await $fetch('/api/playlists/add', {
      method: 'POST',
      body: {
        name: values.name,
        user_id: userId
      }
    })
    isSubmitting.value = false
  } catch (error) {
    console.error('Error uploading playlist', error)
  }
})
</script>
