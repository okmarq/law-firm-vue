import { defineStore } from 'pinia'

export const useClientStore = defineStore('client', {
  state: () => {
    return {
      client: {
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        date_profiled: null,
        primary_legal_counsel: null,
        date_of_birth: null,
        profile_image: null,
        case_detail: null,
      },
    }
  },
  $reset() {
    this.client = {}
  },
  getters: {
    getClient: (state) => state.client,
  },
  actions: {
    setId(id) {
      // self = this
      self.client.id = id
    }
  }
})