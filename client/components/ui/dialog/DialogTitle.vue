<script setup lang="ts">
import { DialogTitle, type DialogTitleProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<DialogTitleProps & { class?: string }>()
</script>

<template>
  <DialogTitle
    v-bind="props"
    :class="
      cn(
        'text-lg text-neutral-950 font-semibold leading-none tracking-tight dark:text-neutral-50',
        props.class,
      )
    "
  >
    <slot />
  </DialogTitle>
</template>
