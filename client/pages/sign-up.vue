<template>
  <FormCard>
    <div class="flex flex-col items-center space-y-10">
      <h1 class="text-xl font-bold text-white">Sign up</h1>
      <form class="flex flex-col space-y-6 w-[min(30vw)]" @submit="onSubmit">
        <!-- Name -->
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel class="text-white">Name</FormLabel>
            <FormControl >
              <Input type="text" placeholder="Add a name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      
        <!-- Password -->
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel class="text-white">Password</FormLabel>
            <FormControl >
              <Input type="text" placeholder="Add a password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
            <p v-if="error !== ''" class="text-sm italic text-red-500 text-pretty">{{ error }}</p>
          </FormItem>
        </FormField>
      
        <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
          Sign up
        </Button>
      
        <Button v-show="isSubmitting" disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          Signing up
        </Button>
      </form>
    </div>
  </FormCard>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Loader2 } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { signUp } = userStore

const isSubmitting = ref(false)
const error = ref('')

const formSchema = toTypedSchema(z.object({
  name: z.string({
    required_error: 'Please add a name.', 
  }).min(4).max(14),
  password: z.string({
    required_error: 'Please add a password.',
  }).min(4).max(14),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  const user = await signUp(values.name, values.password)
  if(user) await navigateTo({ path: '/' })
  else error.value = "The name you've chosen is already taken. Please select a different name."
})

</script>
