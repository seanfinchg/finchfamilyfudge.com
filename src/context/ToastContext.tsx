// src/context/ToastContext.tsx
import React, { useState, type ReactNode } from "react";
import { ToastContext } from "./toast";

interface Toast {
  id: string;
  message: string;
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string) => {
    const id = crypto.randomUUID(); // Generate a unique ID for each toast
    setToasts((prev) => [...prev, { id, message }]);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 space-y-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-2xl text-lg font-semibold animate-fadeIn"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
