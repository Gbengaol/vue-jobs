<script setup lang="ts">
import { cn } from '@/utils/cn'
import InputLabel from './InputLabel.vue'
import ErrorHandler from './ErrorHandler.vue'

defineProps({
  label: {
    required: true,
    type: String
  },
  placeholder: {
    type: String
  },
  rows: {
    type: Number,
    default: 2
  },
  modelValue: {
    required: true,
    type: String,
    default: ''
  },
  name: {
    required: true,
    type: String
  },
  error: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
<template>
  <div class="mb-4 w-full">
    <InputLabel :label="label" :error="error" :name="name" />
    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300">
      <textarea
        v-bind="$attrs"
        :value="modelValue"
        :id="name"
        :name="name"
        @input="handleInput"
        :class="
          cn(
            'form-input block flex-1 rounded-md border-[1.5px] border-gray-500 bg-white py-1.5 p-2 text-black outline-none placeholder:text-gray-400 focus:border-gray-500 focus:ring-0 sm:text-sm sm:leading-6',
            !!error && 'rounded-md border-red-400 focus:border-red-400 focus:ring-red-400'
          )
        "
        :placeholder="placeholder"
        :rows="rows"
      ></textarea>
    </div>
    <ErrorHandler :error="error" />
  </div>
</template>
