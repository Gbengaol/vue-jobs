import * as z from 'zod'

const AddJobSchema = z.object({
  type: z
    .string({
      message: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(64),
  title: z
    .string({
      message: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(64),
  description: z
    .string({
      message: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(256),
  salary: z
    .string({
      message: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(64),
  location: z
    .string({
      message: 'This field is required'
    })
    .min(1, {
      message: 'This field is required'
    })
    .max(64),
  company: z.object({
    name: z
      .string({
        message: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(64),
    description: z
      .string({
        message: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(256),
    contactEmail: z
      .string({
        message: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(64),
    contactPhone: z
      .string({
        message: 'This field is required'
      })
      .min(1, {
        message: 'This field is required'
      })
      .max(64)
  })
})

export { AddJobSchema }
