<template>
  <div class="flex flex-col gap-4 m-4" :class="{'hidden': !isLoginRoute }">
    <div class="flex flex-col gap-4">
      <DesktopNav />
      <Separator class="bg-neutral-950" orientation="horizontal" />
    </div>
    <div class="flex flex-row space-x-2">
      <div class="flex flex-row space-x-20">
        <Menu />
        <slot />
      </div>
    </div>
  </div>
  
  <div :class="{'hidden': isLoginRoute }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isLoginRoute = computed(() => {
  return route.path !== '/sign-in' && route.path !== '/sign-up' ? true : false
})

</script>