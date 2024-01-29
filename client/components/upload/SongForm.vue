<template>
  <form class="flex flex-col h-full max-h-screen space-y-6 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none" @submit="onSubmit">
    <!-- Album name -->
    <FormField v-slot="{ componentField  }" name="name">
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
    
    <!-- Cover -->
    <FormField v-slot="{ componentField  }" name="imageFile">
      <FormItem>
        <FormLabel class="text-white">Album image</FormLabel>
        <FormControl >
          <Input 
          type="file" 
          id="imageFile"
          accept="image/*"
          v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          This is the album image
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <!-- Audio file -->
    <FormField v-slot="{ componentField  }" name="audioFile">
      <FormItem>
        <FormLabel class="text-white">Music file</FormLabel>
        <FormControl >
          <Input 
          type="file" 
          id="audioFile"
          accept="audio/*"
          v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          This is the music file
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
            <SelectGroup>
              <SelectItem value="Pop">
                Pop
              </SelectItem>
              <SelectItem value="Rock">
                Rock
              </SelectItem>
              <SelectItem value="Classic">
                Classic
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription>
          Select an album where you want to upload the music
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <Button size="sm" type="submit">  
      Add new song
    </Button>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';

const formSchema = toTypedSchema(z.object({
  name: z.string({
    required_error: 'Please add a name for the album.', 
  }).min(7).max(120),
  imageFile: z.custom<File>(),
  audioFile: z.custom<File>(),
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

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})


</script>

