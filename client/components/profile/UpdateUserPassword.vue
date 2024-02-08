<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel class="text-white">Update password</FormLabel>
        
        <FormControl>
          <Input type="text" id="password" placeholder="Add new password" v-bind="componentField" />
        </FormControl>
      
        <FormMessage />
      </FormItem>
    </FormField>
  
    <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
      Update password
    </Button>
  
    <Button v-show="isSubmitting" disabled>
      <Loader2 class="w-4 h-4 mr-2 animate-spin" />
      Updating password
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
  password: z.string().min(5).max(14)
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    await $fetch('/api/updates/password', {
      method: 'PUT',
      body: {
        userId: userId,
        password: values.password
      }
    })
    isSubmitting.value = false
  } catch (error) {
    console.error('Error updating password', error)
  }
})

</script>
