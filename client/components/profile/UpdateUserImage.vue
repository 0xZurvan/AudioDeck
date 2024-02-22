<template>
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
  
    <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
      Update image
    </Button>
  
    <Button v-show="isSubmitting" disabled>
      <Loader2 class="w-4 h-4 mr-2 animate-spin" />
      Updating image
    </Button>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { updateUser } = userStore

const sbClient = useSupabaseClient()
const isSubmitting = ref(false)

const imageFormSchema = toTypedSchema(z.object({
  image: z.custom<File>()
}))

const imageForm = useForm({
  validationSchema: imageFormSchema
})

const onSubmitImageForm = imageForm.handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    if(user.value.name !== '' || user.value.image !== '') {
      const { error: updateError } = await sbClient.storage.from('users').update(user.value.id.toString(), values.image)
      
      if (updateError) console.error(updateError)

      await updateUser()
      
      isSubmitting.value = false
    } else {
      isSubmitting.value = false
      console.error('User is not defined')
    }
    
  } catch (error) {
    console.error('Error updating image', error)
  }
})
</script>

