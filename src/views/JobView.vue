<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import BackButton from '@/components/BackButton.vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useDeleteJob, useJob } from '@/hooks/api-hooks/use-jobs'
import { useFavoritesStore } from '@/stores/favorites'
import { computed } from 'vue'

const route = useRoute()
const jobId = computed(() => route.params.id as string)

const { data: job, isLoading } = useJob(jobId)

const toast = useToast()
const router = useRouter()

const { removeFromFavorites } = useFavoritesStore()
const { mutate } = useDeleteJob()
const deleteJob = async () => {
  const confirm = window.confirm('Are you sure you want to delete this job?')
  if (confirm) {
    mutate(jobId.value, {
      onSuccess: () => {
        removeFromFavorites(jobId.value)
        toast.success('Job deleted successfully')
        router.push('/jobs')
      },
      onError: (error) => {
        toast.error('Job was not deleted')
        console.error('Error deleting job', error)
      }
    })
  }
}
</script>
<template>
  <BackButton />
  <!-- Show loading spinner when isLoading is true -->
  <div v-if="isLoading" class="text-center texy-gray-500 py-6">
    <PulseLoader />
  </div>
  <section v-else class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ job?.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ job?.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ job?.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

            <p class="mb-4">
              {{ job?.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ job?.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ job?.company?.name }}</h2>

            <p class="my-2">
              {{ job?.company?.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ job?.company?.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ job?.company?.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${job?.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              @click="deleteJob"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
