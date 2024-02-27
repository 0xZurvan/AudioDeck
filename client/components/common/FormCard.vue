<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col space-y-10 items-center w-[min(50vw)] h-[min(35vw)] rounded-lg bg-neutral-950 p-10">
      <slot />
      <NuxtLink v-show="$route.path === '/sign-in'" class="text-sm text-green-500 hover:text-white text-pretty" to="/sign-up">Create account</NuxtLink>
      <NuxtLink v-show="$route.path === '/sign-up'" class="text-sm text-green-500 hover:text-white text-pretty" to="/sign-in">I have an account</NuxtLink>
    </div>
  </div>
</template>