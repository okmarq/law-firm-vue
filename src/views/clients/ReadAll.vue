<script setup>
import { ref } from 'vue'
import instance from "@/service/ApiService"
import { useRouter } from 'vue-router'
import { useClientStore } from '@/stores/client'

const client = useClientStore()
const router = useRouter()
const clients = ref([]);
const isClient = ref(false);
const errorMessage = ref('')
const lastName = ref('')

instance.getClients()?.then(response => {
  isClient.value = true
  if (response.data.data.length) {
    isClient.value = true
  } else {
    isClient.value = false
  }
  return clients.value = response.data.data
}).catch(error => {
  isClient.value = false
  return errorMessage.value = error.message
})

function filter(lastName) {
  instance.getClientsByLastName(lastName)?.then(response => {
    if (response.data.data.length) {
      isClient.value = true
    } else {
      isClient.value = false
    }
    return clients.value = response.data.data
  }).catch(error => {
    return errorMessage.value = error.message
  })
}

function readOne(id) {
  router.push({ name: 'profile', params: { id } })
}
</script>

<template>
  <div class="relative rounded-3xl shadow-xl mx-2 md:mx-4 lg:mx-6">
    <form @submit.prevent="onSubmit" class="my-6 mx-auto rounded-3xl w-96 space-y-3">
      <label class="relative block">
        <span class="sr-only">Filter by last name</span>
        <input type="text" name="search" @change="filter(lastName)" v-model="lastName"
          class="placeholder:italic placeholder:text-slate-400 shadow-sm focus:ring-sky-500 focus:ring-1 sm:text-sm block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder="Search for anything...">
      </label>

      <button
        class="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 px-3 py-2 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 active:bg-purple-900 focus:outline-none focus:ring focus:ring-purple-300">
        Filter
      </button>
    </form>

    <ul v-if="isClient" role="list" class="px-3 py-6 bg-white mx-auto rounded-3xl w-96 divide-y divide-slate-200">
      <li v-for="client in clients" :key="client" @click="readOne(client.id)"
        class="flex space-x-6 py-3 first:pt-0 last:pb-0 group/item hover:bg-slate-100 hover:rounded-2xl cursor-pointer">
        <img class="h-16 w-16 object-cover rounded-full" v-if="client.profile_image" :src="client.profile_image"
          alt="Current profile photo">
        <img v-else class="h-16 w-16 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
          alt="Current profile photo">
        <div class="ml-3 overflow-hidden flex flex-col justify-around">
          <p class="text-sm font-medium text-slate-900">{{ client.first_name }}</p>
          <p class="text-sm font-medium text-slate-900">{{ client.last_name }}</p>
          <p class="text-sm text-slate-500 truncate">{{ client.email }}</p>
        </div>
      </li>
    </ul>
    <p v-else class="px-3 py-6 bg-white mx-auto rounded-3xl w-96">No Client Found</p>
  </div>
</template>
