// src/context/toast.ts: the toast context and its hook. The provider lives in ToastContext.tsx.
import { createContext, useContext } from "react";

export interface ToastContextType {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
