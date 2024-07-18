<script setup lang="ts">
import router from '@/router'
import { useToast } from 'vue-toastification'
import { useAddJob } from '@/hooks/api-hooks/use-jobs'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import TextInput from '@/components/TextInput.vue'
import TextArea from '@/components/TextArea.vue'
import { AddJobSchema } from '@/utils/schemas/add-job-schema'
import SelectOption from '@/components/SelectOption.vue'

const { errors, values, handleSubmit, defineField } = useForm({
  validationSchema: toTypedSchema(AddJobSchema)
})

const { value: type } = useField<string>('type')
const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')
const { value: salary } = useField<string>('salary')
const { value: location } = useField<string>('location')
const { value: company } = useField<{
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}>('company')

defineField('company.name')
defineField('company.description')
defineField('company.contactEmail')
defineField('company.contactPhone')

const toast = useToast()
const { mutate } = useAddJob()

const onSubmit = handleSubmit(async () => {
  mutate(values, {
    onSuccess: (response) => {
      toast.success('Job added successfully')
      router.push(`/jobs/${response.id}`)
    },
    onError: (error) => {
      toast.error('Job was not added')
      console.error('Error adding job', error)
    }
  })
})
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="onSubmit" novalidate>
          <h2 class="text-3xl text-center font-semibold mb-6">Add Job</h2>

          <SelectOption label="Job Type" v-model="type" name="type" :error="errors.type">
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </SelectOption>

          <TextInput
            label="Job Listing Name"
            v-model="title"
            name="title"
            placeholder="eg. Beautiful Apartment In Miami"
            :error="errors.title"
          />

          <TextArea
            label="Job Description"
            v-model="description"
            name="description"
            placeholder="Add any job duties, expectations, requirements, etc"
            :error="errors.description"
          />

          <SelectOption label="Salary" v-model="salary" name="salary" :error="errors.salary">
            <option value="Under $50K">under $50K</option>
            <option value="$50K - $60K">$50 - $60K</option>
            <option value="$60K - $70K">$60 - $70K</option>
            <option value="$70K - $80K">$70 - $80K</option>
            <option value="$80K - $90K">$80 - $90K</option>
            <option value="$90K - $100K">$90 - $100K</option>
            <option value="$100K - $125K">$100 - $125K</option>
            <option value="$125K - $150K">$125 - $150K</option>
            <option value="$150K - $175K">$150 - $175K</option>
            <option value="$175K - $200K">$175 - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </SelectOption>

          <TextInput
            label="Location"
            v-model="location"
            name="location"
            placeholder="Company Location"
            :error="errors.location"
          />

          <h3 class="text-2xl mb-5">Company Info</h3>

          <TextInput
            label="Company Name"
            v-model="company.name"
            name="company"
            placeholder="Company Name"
            :error="errors['company.name']"
          />

          <TextArea
            label="Company Description"
            v-model="company.description"
            name="company_description"
            placeholder="What does your company do?"
            :error="errors['company.description']"
          />

          <TextInput
            type="email"
            label="Company Email"
            v-model="company.contactEmail"
            name="contact_email"
            placeholder="Email address for applicants"
            :error="errors['company.contactEmail']"
          />

          <TextInput
            type="tel"
            label="Company Phone"
            v-model="company.contactPhone"
            name="contact_phone"
            placeholder="Optional phone for applicants"
            :error="errors['company.contactPhone']"
          />

          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
