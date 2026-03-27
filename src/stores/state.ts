import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {

  const appModes = ref([
  {
    name: 'Study Mode',
    active: true,
  },
  {
    name: 'All Cards',
    active: false,
  }
]);

  return { appModes }
})