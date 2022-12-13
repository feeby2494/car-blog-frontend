import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIsLoadingStore = defineStore('isLoading', () => {
  var isLoading = ref(true)
  function setIsLoading(bool) {
    isLoading = bool
  }

  return { isLoading, setIsLoading }
})
