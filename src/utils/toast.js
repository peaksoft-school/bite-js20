import { toast } from 'react-toastify'

export const showSuccess = ({ title, message }) => {
  toast.success(`${title} — ${message}`)
}

export const showError = ({ title, message }) => {
  toast.error(`${title} — ${message}`)
}

export const showInfo = ({ title, message }) => {
  toast.info(`${title} — ${message}`)
}

export const showWarning = ({ title, message }) => {
  toast.warning(`${title} — ${message}`)
}
