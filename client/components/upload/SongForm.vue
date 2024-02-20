<template>
  <form class="flex flex-col space-y-6" @submit="onSubmit">
    <!-- Album name -->
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel class="text-white">Song title</FormLabel>
        <FormControl >
          <Input type="text" placeholder="Add song title" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is the song title
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <!-- Audio file -->
    <FormField v-slot="{ componentField  }" name="songFile">
      <FormItem>
        <FormLabel class="text-white">Song file</FormLabel>
        <FormControl >
          <Input 
          type="file" 
          id="songFile"
          accept="audio/*"
          v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          This is the song file
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <!-- Album to upload -->
    <FormField v-slot="{ componentField }" name="albumId">
      <FormItem>
        <FormLabel class="text-white">Album to upload</FormLabel>
      
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue class="text-neutral-950" placeholder="Select an album" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="album in albums" :value="album.id.toString()">
                {{ album.title }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription>
          Select an album where you want to upload the song
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
      Add new song
    </Button>
    
    <Button v-show="isSubmitting" disabled>
      <Loader2 class="w-4 h-4 mr-2 animate-spin" />
      Uploading album
    </Button>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next'
import { type Album } from '@/types'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const sbClient = useSupabaseClient()
const isSubmitting = ref(false)

const { data: albums } = await useFetch(`/api/albums/user/${user.value.id}`, {
  transform: (albums: Album[]) => {
    return albums.map((album: Album) => ({
      id: album.id,
      title: album.title,
      user_id: album.user_id,
      category: album.category
    }))
  }
})

const formSchema = toTypedSchema(z.object({
  title: z.string({
    required_error: 'Please add a title for the song.', 
  }).min(7).max(14),
  songFile: z.custom<File>(),
  albumId: z.string({
    required_error: 'Please select an album.',
  })
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  const { error: uploadError } = await sbClient.storage.from('songs').upload(`${values.albumId}/${values.title}`, values.songFile)
  if (uploadError) console.error(uploadError)
  
  try {
    await $fetch('/api/songs/add', {
      method: 'POST',
      body: {
        title: values.title,
        user_id: user.value.id,
        album_id: Number(values.albumId)
      }
    })
    
    isSubmitting.value = false
  } catch (error) {
    console.error(error)
  }
})

</script>

