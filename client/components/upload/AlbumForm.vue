<template>
  <main>
    <form class="w-full space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField  }" name="username">
        <FormItem>
          <FormLabel class="text-white">User name</FormLabel>

          <FormControl >
            <Input type="text" placeholder="Add your name" v-bind="componentField " />
          </FormControl>

          <FormDescription class="text-white">
            This is your public display name.
          </FormDescription>

          <FormMessage class="text-green" />
        </FormItem>
      </FormField>

      <Button size="sm" type="submit">  
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
  username: z.string().min(7).max(120),
}))

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

</script>

