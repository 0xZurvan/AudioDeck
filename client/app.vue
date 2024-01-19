<template>
 <div class="flex flex-row w-screen h-screen overflow-hidden">
    <NuxtLayout class="flex flex-row m-10">
      <NuxtPage />
    </NuxtLayout>
    <div class="flex flex-col my-10 h-screen space-y-10">
      <UserTab />
      <OutputPanel />
    </div>
 </div>
</template>

<script setup lang="ts">

</script>