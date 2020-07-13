import { toast } from "react-toastify";

const Toast = {
  success: (message, option) => {
    return toast.success(message, { ...option });
  },
  warn: (message, option) => {
    return toast.warn(message, { ...option });
  },
  error: (message, option) => {
    return toast.error(message, { ...option });
  },
  info: (message, option) => {
    return toast.info(message, { ...option });
  },
  dismiss: () => {
    toast.dismiss();
  }
};
export default Toast;
