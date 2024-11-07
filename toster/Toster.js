import { toast } from "react-toastify";

export default function Toster(text, status) {
  if (status === "success") {
    return toast.success(text, {
      autoClose: 3000,
      toastId: text,
      pauseOnFocusLoss: false,
      pauseOnHover: true,
    });
  } else if (status === "error") {
    return toast.error(text, {
      autoClose: 3000,
      toastId: text,
      pauseOnFocusLoss: false,
      pauseOnHover: true,
    });
  }

  return null;
}
