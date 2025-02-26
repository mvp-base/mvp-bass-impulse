import { toast } from 'react-toastify';

export function toastOk(message) {
  toast(message, {
    hideProgressBar: false,
    autoClose: 2000,
    type: 'success',
    position: 'bottom-right',
  });
}

export function toastError(message) {
  toast.error(message, {
    hideProgressBar: false,
    autoClose: 2000,
    position: 'bottom-right',
  });
}
