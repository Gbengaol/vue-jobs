<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { RouterLink } from 'vue-router'

const store = useFavoritesStore()
</script>
<template>
  <ul class="flex flex-col gap-3" v-if="!!store.favorites.length">
    <li
      v-for="favorite in store.favorites"
      :key="favorite.id"
      class="flex flex-col gap-1 w-full bg-green-800 text-white rounded-md active:scale-[0.99]"
    >
      <RouterLink :to="`/jobs/${favorite.id}`" class="p-2">
        <div class="flex gap-2 justify-between items-center">
          <div
            class="text-xs font-bold inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
          >
            {{ favorite.title }}
          </div>
          <button class="active:scale-110" @click="store.removeFromFavorites(favorite.id)">
            <i class="pi pi-trash text-red-400"></i>
          </button>
        </div>
        <div class="flex text-[10px] gap-3">
          <div>{{ favorite.type }}</div>
          <div>{{ favorite.salary }}</div>
        </div>
      </RouterLink>
    </li>
  </ul>
  <div v-else class="text-center p-4 text-red-400">No favorites</div>
</template>
