<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hidden lg:flex flex-col self-center sm:max-w-4xl xl:max-w-md z-10">
    <div class="self-start flex flex-col text-gray-300 md:pr-28">
      <h1 class="my-3 font-semibold text-4xl">{{ title }}</h1>
      <p class="pr-3 text-sm opacity-75">{{ body }}</p>
    </div>
  </div>
</template>

