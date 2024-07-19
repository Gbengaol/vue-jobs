<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'

const store = useFavoritesStore()
</script>
<template>
  <ul class="flex flex-col gap-3" v-if="!!store.favorites.length">
    <li
      v-for="favorite in store.favorites"
      :key="favorite.id"
      class="flex justify-between items-center gap-2 w-full bg-green-800 text-white rounded-md active:scale-[0.99] p-2"
    >
      <RouterLink
        class="flex flex-col gap-1 justify-between items-start overflow-hidden"
        :to="`/jobs/${favorite.id}`"
      >
        <div
          class="text-xs font-bold inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
        >
          {{ favorite.title }}
        </div>
        <div class="flex text-[10px] gap-3">
          <div>{{ favorite.type }}</div>
          <div>{{ favorite.salary }}</div>
        </div>
      </RouterLink>
      <button class="active:scale-110 z-10" @click="store.removeFromFavorites(favorite.id)">
        <i class="pi pi-trash text-red-400"></i>
      </button>
    </li>
  </ul>
  <div v-else class="text-center p-4 text-red-400">No favorites</div>
</template>
