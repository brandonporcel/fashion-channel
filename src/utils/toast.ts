import { toast } from "sonner";

export const showErrorToast = (message: string, description?: string) => {
  toast.error(message || "Error submitting data", {
    duration: 5000,
    icon: "❌",
    style: {
      backgroundColor: "#fef2f2",
      color: "#991b1b",
      border: "1px solid #fecaca",
    },
  });
};

export const showSuccessToast = (message: string, description?: string) => {
  toast.success(message, {
    description,
    duration: 4000,
    style: {
      backgroundColor: "#ecfdf5",
      color: "#065f46",
      border: "1px solid #a7f3d0",
    },
    icon: "✅",
  });
};
