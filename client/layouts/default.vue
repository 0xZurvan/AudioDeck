<template>
  <div class="flex flex-col gap-4">
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
</template>

<script setup lang="ts">

</script>