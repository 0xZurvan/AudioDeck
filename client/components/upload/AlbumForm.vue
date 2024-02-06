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

const sbClient = useSupabaseClient()
const isSubmitting = ref(false)

const userName = 'Isaac'
const { data: user } = await useFetch(`/api/users/${userName}`)

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

/* const { data: albumUrl } = sbClient.storage.from('albums').getPublicUrl(`${userId}/${values.title}`)
console.log('albumUrl', albumUrl.publicUrl) */

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  // @ts-ignore
  const userId = user.value.User.id
  const { error: uploadError } = await sbClient.storage.from('albums').upload(`${values.title}`, values.image)
  if (uploadError) console.error(uploadError)

  try {
    await $fetch('/api/albums/add', {
      method: 'POST',
      body: {
        title: values.title,
        userId: userId,
        category: values.category
      }
    })

    isSubmitting.value = false
  } catch (error) {
    console.error('Error adding new album:', error)
  }

})

</script>

