<template>
    <form class="flex flex-col space-y-6" @submit="onSubmit">
      <!-- Album title -->
      <FormField v-slot="{ componentField  }" name="title">
        <FormItem>
          <FormLabel class="text-white">Album title</FormLabel>

          <FormControl >
            <Input type="text" placeholder="Add album title" v-bind="componentField" />
          </FormControl>

          <FormDescription>
            This is the album title
          </FormDescription>

          <FormMessage />
        </FormItem>
      </FormField>
      
      <!-- Cover -->
      <FormField v-slot="{ componentField  }" name="image">
        <FormItem>
          <FormLabel class="text-white">Album image</FormLabel>

          <FormControl >
            <Input 
            type="file" 
            id="image"
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
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';


const userName = 'Shaidy';
const { data: user } = await useFetch(`/api/user/?name=${userName}`)

const formSchema = toTypedSchema(z.object({
  title: z.string({
    required_error: 'Please add a title for the album.', 
  }).min(7).max(120),
  image: z.custom<File>(),
  category: z.string({
    required_error: 'Please select a category for the album.',
  }),
}))

const form = useForm({
  validationSchema: formSchema
})


const onSubmit = form.handleSubmit(async (values) => {
  const formData = new FormData();
  formData.append('title', values.title)
  formData.append('image', values.image) 
  formData.append('user_id', user.value.User.id) 
  formData.append('category', values.category)

  try {
    const response = await $fetch('/api/albums', {
      method: 'POST',
      body: formData
    });
    console.log('response', response);
  } catch (error) {
    console.error('Error adding new album:', error);
  }

});


</script>

