<template>
  <main class="flex flex-col h-full max-h-screen px-4 space-y-10 overflow-hidden overflow-y-scroll scroll-smooth scrollbar-track-transparent scrollbar-thumb-green-500 scrollbar-thin">
    <h2 class="text-xl font-bold text-white">Update information</h2>
    <!-- Update name -->
    <form class="flex flex-col gap-4" @submit="onSubmitNameForm">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel class="text-white">Update name</FormLabel>
          
          <FormControl>
            <Input type="text" placeholder="Add new name" v-bind="componentField" />
          </FormControl>
        
          <FormMessage />
        </FormItem>
      </FormField>
    
      <Button class="bg-green-500">Update name</Button>
    </form>

    <!-- Update password -->
    <form class="flex flex-col gap-4" @submit="onSubmitPasswordForm">
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel class="text-white">Update password</FormLabel>
          
          <FormControl>
            <Input type="text" placeholder="Add new password" v-bind="componentField" />
          </FormControl>
        
          <FormMessage />
        </FormItem>
      </FormField>
      
      <Button class="bg-green-500">Update password</Button>
    </form>
  
    <!-- Update image -->
    <form class="flex flex-col gap-4" @submit="onSubmitImageForm">
      <FormField v-slot="{ componentField }" name="image">
        <FormItem>
          <FormLabel class="text-white">Update image</FormLabel>
          
          <FormControl>
            <Input type="file" id="image" accept="image/*" v-bind="componentField" />
          </FormControl>
        
          <FormMessage />
        </FormItem>
      </FormField>
    
      <Button class="bg-green-500">Update image</Button>
    </form>
  </main>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const nameFormSchema = toTypedSchema(z.object({
  name: z.string().min(7).max(120),
}))

const passwordFormSchema = toTypedSchema(z.object({
  password: z.string().min(5).max(14),
}))

const imageFormSchema = toTypedSchema(z.object({
  image: z.custom<File>()
}))

const nameForm = useForm({
  validationSchema: nameFormSchema
})

const passwordForm = useForm({
  validationSchema: passwordFormSchema
})

const imageForm = useForm({
  validationSchema: imageFormSchema
})

const onSubmitNameForm = nameForm.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const onSubmitPasswordForm = passwordForm.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const onSubmitImageForm = imageForm.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>
