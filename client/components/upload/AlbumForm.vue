<template>
  <main>
    <form class="flex flex-col h-full max-h-screen space-y-6 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-none" @submit="onSubmit">
      <!-- Album name -->
      <FormField v-slot="{ componentField  }" name="name">
        <FormItem>
          <FormLabel class="text-white">Album name</FormLabel>

          <FormControl >
            <Input type="text" placeholder="Add album name" v-bind="componentField" />
          </FormControl>

          <FormDescription>
            This is the album name
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
      
      <!-- Category -->
      <FormField v-slot="{ componentField }" name="category">
        <FormItem>
          <FormLabel class="text-white">Category</FormLabel>
        
          <Select v-bind="componentField">
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
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
            This is the category for the new album
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button class="bg-green-500" size="sm" type="submit">  
        Add new album
      </Button>
    </form>
  </main>
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
  category: z.string({
    required_error: 'Please select a category for the album.',
  }),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})


</script>

