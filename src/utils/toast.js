import { toast } from 'react-toastify'

//  SUCCESS
export const showSuccess = ({ title, message }) => {
  toast.success(`${title} — ${message}`)
}

//  ERROR
export const showError = ({ title, message }) => {
  toast.error(`${title} — ${message}`)
}

//  INFO
export const showInfo = ({ title, message }) => {
  toast.info(`${title} — ${message}`)
}

//  WARNING
export const showWarning = ({ title, message }) => {
  toast.warning(`${title} — ${message}`)
}
