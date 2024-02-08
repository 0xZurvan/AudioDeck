<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel class="text-white">Update name</FormLabel>
        
        <FormControl>
          <Input type="text" id="name" placeholder="Add new name" v-bind="componentField" />
        </FormControl>
      
        <FormMessage />
      </FormItem>
    </FormField>
  
    <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
      Update name
    </Button>
  
    <Button v-show="isSubmitting" disabled>
      <Loader2 class="w-4 h-4 mr-2 animate-spin" />
      Updating name
    </Button>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'

const userId = inject('userId')

const isSubmitting = ref(false)

const formSchema = toTypedSchema(z.object({
  name: z.string().min(7).max(14)
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    await $fetch('/api/updates/name', {
      method: 'PUT',
      body: {
        userId: userId,
        name: values.name
      }
    })
    
    isSubmitting.value = false
  } catch (error) {
    console.error('Error updating name', error)
  }
})

</script>
