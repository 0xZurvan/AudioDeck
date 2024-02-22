<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" class="text-white bg-black border-neutral-950" size="sm">  
        Upload image
      </Button>
    </DialogTrigger>
    
    <DialogContent class="sm:max-w-[425px] bg-neutral-950 text-green-500">
      <DialogHeader>
        <DialogTitle class="text-white">Upload image</DialogTitle>
        <DialogDescription>
          Upload your profile image
        </DialogDescription>
      </DialogHeader>
      
      <FormField v-slot="{ componentField }" name="image">
        <FormItem>
          <FormLabel class="text-white">Image</FormLabel>
          
          <FormControl >
            <Input type="file" accept="image/*" v-bind="componentField" />
          </FormControl>
        <FormMessage />
        </FormItem>
      </FormField>
      
      <DialogFooter>
        <Button @click="onSubmit" v-show="!isSubmitting" class="bg-green-500" size="sm">
          Upload image
        </Button>
    
        <Button v-show="isSubmitting" disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          Uploading image
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const { updateUser } = userStore
const isSubmitting = ref(false)
const sbClient = useSupabaseClient()

const formSchema = toTypedSchema(z.object({
  image: z.custom<File>()
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    if(user.value.name !== '' || user.value.image !== '') {
      const { error: uploadError } = await sbClient.storage.from('users').upload(user.value.id.toString(), values.image)
      if (uploadError) console.error(uploadError) 
      
      await updateUser()
      
      isSubmitting.value = false
    }
    
  } catch (error) {
    console.error('Error uploading image', error)
  }
})
</script>
