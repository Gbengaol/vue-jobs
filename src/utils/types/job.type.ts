type Job = {
  type: string
  title: string
  description: string
  salary: string
  location: string
  company: {
    name: string
    description: string
    contactEmail: string
    contactPhone: string
  }
  id: string
}
export { type Job }
