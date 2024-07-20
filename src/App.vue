<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Navbar />
  <RouterView />
  <Toaster richColors closeButton position="top-right" :visibleToasts="3" className="loc-toast" />
</template>
