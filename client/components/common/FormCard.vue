<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col space-y-10 items-center w-[min(50vw)] h-[min(35vw)] rounded-lg bg-neutral-950 p-10">
      <NuxtLink to="/" class="text-white font-pretty position absolute right-[26vw] top-[7vw]">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"/></svg>  
      </NuxtLink>
      <slot />
      <NuxtLink v-show="$route.path === '/sign-in'" class="text-sm text-green-500 hover:text-white text-pretty" to="/sign-up">Create account</NuxtLink>
      <NuxtLink v-show="$route.path === '/sign-up'" class="text-sm text-green-500 hover:text-white text-pretty" to="/sign-in">I have an account</NuxtLink>
    </div>
  </div>
</template>