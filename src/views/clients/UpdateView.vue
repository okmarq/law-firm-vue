<script setup>
import { reactive, ref } from 'vue'
import instance from "@/service/ApiService"
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notification'

const notification = useNotificationStore()
const router = useRouter()
const client = reactive({})
const errorMessage = ref('')
const payload = reactive({
  first_name: null,
  last_name: null,
  email: null,
  date_profiled: null,
  primary_legal_counsel: null,
  date_of_birth: null,
  profile_image: null,
  case_detail: null,
});

instance.getClient(router.currentRoute.value.params.id)?.then(response => {
  if (response.status === 201) {
    console.log(response.data.data)
    return client.value = response.data.data
    // const title = notification.setTitle('Client Profile')
    // const body = notification.setBody('Profile capture is successful')
  }
}).catch(error => {
  console.error(error)
  // const title = notification.setTitle(`${error.name}`)
  // const body = notification.setBody(`${error.response.data.message}`)
})

function onSubmit() {
  instance.updateClientProfile(payload)?.then(response => {
    if (response.status === 201) {
      client.value = response.data.data
      const title = notification.setTitle('Profile Update')
      const body = notification.setBody('Profile update is successful')
      router.back()
      // const id = response.data.id
      // router.push({ name: 'profile', params: { id } })
    }
  }).catch(error => {
    errorMessage.value = error.message
    const title = notification.setTitle(`${error.name}`)
    const body = notification.setBody(`${error.response.data.message}`)
  })
}
</script>

<template>
  <div class="flex justify-center self-center z-10">
    <div class="p-12 bg-white mx-auto rounded-3xl w-96">
      <div class="mb-7">
        <h3 class="font-semibold text-2xl text-gray-800">Law Firm X</h3>
        <p class="text-gray-400">Profile information form for <span
            class="text-sm text-purple-700 hover:text-purple-700">Client</span></p>
      </div>

      <form class="space-y-4" @submit.prevent="onSubmit">
        <div class="flex items-center space-x-3">
          <div class="shrink-0">
            <img class="h-16 w-16 object-cover rounded-full"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo" />
          </div>
          <label class="block">
            <span class="sr-only">Choose profile image</span>
            <input type="file" @change="payload.profile_image" :id="payload.profile_image"
              class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100">
          </label>
        </div>


        <label class="block">
          <span class="block text-sm font-medium text-slate-700">First name</span>
          <input type="text" placeholder="John" v-model="payload.first_name" :id="payload.first_name" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Last name</span>
          <input type="text" placeholder="Doe" v-model="payload.last_name" :id="payload.last_name" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" placeholder="example@email.com" v-model="payload.email" :id="payload.email" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Date profiled</span>
          <input type="date" v-model="payload.date_profiled" :id="payload.date_profiled" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Date of birth</span>
          <input type="date" v-model="payload.date_of_birth" :id="payload.date_of_birth" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Primary legal counsel</span>
          <input type="text" placeholder="Ojewale Ogoluwa" v-model="payload.primary_legal_counsel"
            :id="payload.primary_legal_counsel" required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Case details</span>
          <input type="text" placeholder="Case of Coke vs Fanta" v-model="payload.case_detail" :id="payload.case_detail"
            required
            class="block w-full text-sm px-3 py-2 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
        </label>

        <div class="block">
          <button type="submit"
            class="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 px-3 py-2 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
