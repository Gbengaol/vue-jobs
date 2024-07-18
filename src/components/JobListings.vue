<script setup lang="ts">
import JobListing from './JobListing.vue'
import { RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useJobs } from '@/hooks/api-hooks/use-jobs'

const { isLoading, data: jobs } = useJobs()

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <!-- Show loading spinner when isLoading is true -->
      <div v-if="isLoading" class="text-center texy-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show loading spinner when isLoading is false -->
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing v-for="job in jobs?.slice(0, limit || jobs?.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
