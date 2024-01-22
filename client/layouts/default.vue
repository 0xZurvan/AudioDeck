<template>
  <div class="flex flex-col space-y-8">
    <DesktopNav />
    <div class="flex flex-row space-x-2">
      <div class="flex flex-row space-x-20">
        <Menu />
        <slot />
      </div>
      <OutputPanel />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>