import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIsLoadingStore = defineStore('isLoading', () => {
  const isLoading = ref(true)
  function setIsLoading(bool) {
    isLoading = bool
  }

  return { isLoading, setIsLoading }
})
