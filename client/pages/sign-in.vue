<template>
  <FormCard>
    <div class="flex flex-col items-center space-y-10">
      <h1 class="text-xl font-bold text-white">Sign in</h1>
      <form class="flex flex-col space-y-6 w-[min(30vw)]" @submit="onSubmit">
        <!-- Name -->
        <FormField v-slot="{ componentField  }" name="name">
          <FormItem>
            <FormLabel class="text-white">Name</FormLabel>
            <FormControl >
              <Input type="text" placeholder="Add a name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      
        <!-- Password -->
        <FormField v-slot="{ componentField  }" name="password">
          <FormItem>
            <FormLabel class="text-white">Password</FormLabel>
            <FormControl >
              <Input type="text" placeholder="Add a password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      
        <Button v-show="!isSubmitting" class="bg-green-500" size="sm" type="submit">  
          Sign in
        </Button>
      
        <Button v-show="isSubmitting" disabled>
          <Loader2 class="w-4 h-4 mr-2 animate-spin" />
          Signing in
        </Button>
      </form>
    </div>
  </FormCard>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { Loader2 } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { signIn } = userStore

const isSubmitting = ref(false)

const formSchema = toTypedSchema(z.object({
  name: z.string({
    required_error: 'Please add a name.', 
  }).min(5).max(14),
  password: z.string({
    required_error: 'Please add a password.',
  }).min(5).max(14),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
  await signIn(values.name, values.password)
  await navigateTo({ path: '/' })
})

</script>
