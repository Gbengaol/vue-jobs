import { supabase } from '@/lib/supabaseClient'
import type { Job } from '@/utils/types/job.type'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { type ComputedRef } from 'vue'

const getJobs = async (): Promise<Job[]> => {
  const response = await supabase.from('jobs').select('*')
  return response.data as Job[]
}

const getJob = async (jobId: string): Promise<Job> => {
  const response = await supabase.from('jobs').select('*').eq('id', jobId).returns()
  return response.data?.[0] as Job
}

const addJob = async (formData: object): Promise<Job> => {
  const response = await supabase.from('jobs').insert(formData).select('*')
  return response.data?.[0] as Job
}

const editJob = async ({ formData, jobId }: { formData: object; jobId: string }): Promise<Job> => {
  const response = await supabase.from('jobs').update(formData).eq('id', jobId).select('*')
  return response.data?.[0] as Job
}

const deleteJob = async (jobId: string) => {
  return await supabase.from('jobs').delete().eq('id', jobId)
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
