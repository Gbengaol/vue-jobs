<script setup lang="ts">
import { cn } from '@/utils/cn'

defineProps({
  error: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label
    :class="
      cn(
        `mb-0.5 block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-6 text-gray-500 ${
          !!error && 'text-red-400'
        }`
      )
    "
    :for="name"
    >{{ label }}</label
  >
</template>
