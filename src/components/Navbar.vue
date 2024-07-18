<script setup lang="ts">
import logo from '@/assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'
import { cn } from '@/utils/cn'
import { ref } from 'vue'
import FavoritesCard from './FavoritesCard.vue'

const showFavoritesList = ref(false)
const toggleFavoritesList = () => {
  showFavoritesList.value = !showFavoritesList.value
}
const store = useFavoritesStore()

const isActiveLink = (routePath: string) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500 sticky left-0 right-0 top-0 z-40">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex items-center space-x-2">
              <RouterLink
                to="/"
                :class="`text-white rounded-md px-3 py-2 ${isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white'}`"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/jobs"
                :class="`text-white rounded-md px-3 py-2 ${isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white'}`"
                >Jobs
              </RouterLink>
              <RouterLink
                to="/jobs/add"
                :class="`text-white rounded-md px-3 py-2 ${isActiveLink('/jobs/add') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white'}`"
                >Add Job</RouterLink
              >
              <div class="relative">
                <button class="relative active:scale-110" @click="toggleFavoritesList">
                  <i class="pi pi-heart text-white text-4xl"></i>
                  <span
                    :class="
                      cn(
                        'absolute inset-0 flex items-center justify-center text-xs text-white pb-1.5',
                        store.favoritesCount ? 'visible' : 'invisible'
                      )
                    "
                  >
                    {{ store.favoritesCount }}
                  </span>
                </button>
                <div
                  class="absolute top-10 left-5 -translate-x-1/2 max-h-64 w-56 bg-white border-2 border-green-800 overflow-y-scroll z-50 p-2"
                  v-show="showFavoritesList"
                >
                  <FavoritesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
