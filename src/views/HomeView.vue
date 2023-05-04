<script setup>
// import { reactive } from 'vue'
import IntroComponent from '../components/IntroComponent.vue'
import CaptureView from './clients/CaptureView.vue'
import NotificationComponent from '../components/NotificationComponent.vue'
import { useNotificationStore } from '@/stores/notification'
import { storeToRefs } from 'pinia'

const { notification } = storeToRefs(useNotificationStore())

</script>

<template>
  <NotificationComponent :title="notification.title" :body="notification.body" v-if="notification.body">
    <!-- <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>-->
  </NotificationComponent>

  <div class="relative sm:flex sm:flex-row justify-around rounded-3xl shadow-xl mx-2 md:mx-4 lg:mx-6">
    <IntroComponent title="Welcome to Law Firm X"
      body="We receive potential clients daily who come to secure the services of a legal counsel to handle court cases after a quick profiling via our Law Firm X CRM application." />

    <CaptureView />
  </div>
</template>
