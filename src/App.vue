<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AbsoluteTopLayout from './components/layouts/AbsoluteTopLayout.vue'
import BottomLayout from './components/layouts/BottomLayout.vue'
</script>

<template>
  <AbsoluteTopLayout />

  <header class="relative">
    <nav
      class="text-white sm:flex sm:flex-row space-x-1 md:space-x-2 lg:space-x-3 bg-transparent m-1 md:m-3 lg:m-6 font-normal md:font-medium lg:font-semibold text-base md:text-lg lg:text-2xl">
      <RouterLink to="/" class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Welcome</RouterLink>
      <RouterLink to="/clients" class="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Clients</RouterLink>
    </nav>
  </header>

  <RouterView />

  <BottomLayout />
</template>
