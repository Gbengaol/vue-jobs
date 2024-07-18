import type { Job } from '@/utils/types/job.type'
import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from 'axios'
import { computed, type ComputedRef } from 'vue'

const getJobs = async (): Promise<Job[]> => {
  const response = await axios.get('/api/jobs')
  return response.data
}

const getJob = async (jobId: string): Promise<Job> => {
  const response = await axios.get(`/api/jobs/${jobId}`)
  return response.data
}

const addJob = async (formData: object): Promise<Job> => {
  const response = await axios.post('/api/jobs', formData)
  return response.data
}

const editJob = async ({ formData, jobId }: { formData: object; jobId: string }): Promise<Job> => {
  const response = await axios.put(`/api/jobs/${jobId}`, formData)
  return response.data
}

const deleteJob = async (jobId: string) => {
  return await axios.delete(`/api/jobs/${jobId}`)
}

const useJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs
  })
}

const useJob = (id: ComputedRef<string>) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => getJob(id.value)
  })
}

const useAddJob = () =>
  useMutation({
    mutationFn: addJob
  })

const useEditJob = () =>
  useMutation({
    mutationFn: editJob
  })

const useDeleteJob = () =>
  useMutation({
    mutationFn: deleteJob
  })

export { useJobs, useJob, useAddJob, useEditJob, useDeleteJob }
