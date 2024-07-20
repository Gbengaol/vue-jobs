import { toast, type ToasterProps } from 'vue-sonner'

interface AlertProps {
  message: string
  position?: ToasterProps['position']
  type?: 'error' | 'success'
  toastOptions?: ToasterProps
}

export const handleAlert = ({
  message,
  position = 'top-right',
  type = 'error',
  toastOptions
}: AlertProps) => {
  const options: ToasterProps = {
    position,
    duration: 10000,
    ...toastOptions
  }
  toast[type](message, options)
}
