import { ref, computed, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Job } from '@/utils/types/job.type'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Job[]>([])
  const favoritesCount = computed(() => favorites.value.length)

  const addToFavorites = (job: Job) => {
    favorites.value = [...favorites.value, job]
  }
  const removeFromFavorites = (id: string) => {
    favorites.value = favorites.value.filter((fav) => fav.id !== id)
  }
  const updateFavorite = (job: Job) => {
    favorites.value = favorites.value.map((fav) => {
      if (fav.id === job.id) return job
      return fav
    })
  }

  const isJobInFavorites = (id: string) => {
    return favorites.value?.some((fav) => fav.id === id)
  }

  onMounted(() => {
    const savedInStorage = localStorage.getItem('favorites')
    if (savedInStorage) favorites.value = JSON.parse(savedInStorage)
  })

  watch(favorites, (newFavorites) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  })

  return {
    favorites,
    favoritesCount,
    addToFavorites,
    removeFromFavorites,
    updateFavorite,
    isJobInFavorites
  }
})
