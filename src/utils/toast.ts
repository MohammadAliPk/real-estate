import toast from "react-hot-toast";

export default function toastHandler(type: string, message: string) {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else {
    return;
  }
}
