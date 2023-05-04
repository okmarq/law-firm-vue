import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => {
    return {
      notification: {
        title: '',
        body: '',
      },
    }
  },
  $reset() {
    this.notification.title = ''
    this.notification.body = ''
  },
  getters: {
    getNotification: (state) => state.notification,
  },
  actions: {
    setTitle(title) { this.notification.title = title },
    setBody(body) { this.notification.body = body },
  }
})