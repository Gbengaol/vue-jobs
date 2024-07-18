<script setup lang="ts">
defineProps({
  error: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <span class="text-xs text-red-400 font-normal" v-if="!!error">{{ error }}</span>
</template>
