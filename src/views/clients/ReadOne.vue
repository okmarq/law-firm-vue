<script setup>
import { reactive, ref } from 'vue'
import instance from "@/service/ApiService"
import { useRouter } from 'vue-router'
import { useNotificationStore } from '@/stores/notification'

const notification = useNotificationStore()
const router = useRouter()
const client = reactive({})
const errorMessage = ref('')

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

function update() {
  const id = router.currentRoute.value.params.id
  router.push({ name: 'update', params: { id } })
}
</script>

<template>
  <div class="relative rounded-3xl shadow-xl mx-2 md:mx-4 lg:mx-6">
    <div
      class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto w-24 h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
        alt="Current profile photo">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Erin Lindford {{ client.first_name }}
          </p>
          <p class="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button
          class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          @click="update">Update</button>
      </div>
    </div>
  </div>
</template>
