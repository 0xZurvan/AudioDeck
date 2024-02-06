<template>
  <form class="flex flex-col space-y-6" @submit="onSubmit">
    <!-- Album name -->
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel class="text-white">Song name</FormLabel>
        <FormControl >
          <Input type="text" placeholder="Add song name" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is the song name
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
    <FormField v-slot="{ componentField }" name="albumTo">
      <FormItem>
        <FormLabel class="text-white">Album to upload</FormLabel>
      
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select an album" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup v-for="album in albums">
              <SelectItem value="{{ album.id }}">
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
      Add new album
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

const isSubmitting = ref(false)

const userName = 'Isaac'
const { data: user } = await useFetch(`/api/users/${userName}`)
// @ts-ignore
const userId = user.value.User.id
const { data: albums } = await useFetch(`/api/albums/user/${userId}`, {
  transform: (albums: Album[]) => {
    return albums.map((album: Album) => ({
      id: album.id,
      title: album.title,
      userId: album.userId,
      category: album.category
    }))
  }
})

const formSchema = toTypedSchema(z.object({
  name: z.string({
    required_error: 'Please add a name for the song.', 
  }).min(7).max(120),
  songFile: z.custom<File>(),
  albumTo: z.string({
    required_error: 'Please select an album.',
  }),
  category: z.string({
    required_error: 'Please select a category for the song.',
  }),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  // @ts-ignore
  try {
    await $fetch('/api/')
    isSubmitting.value = false
  } catch (error) {
    console.error(error)
  }
})

</script>

