// src/components/Button.tsx
import React from "react";
import { IonIcon } from "@ionic/react";
import { link, logoVenmo } from "ionicons/icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "red" | "purple" | "venmo" | "back";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass =
        "bg-finchGold text-darkBg hover:bg-yellow-600 hover:scale-105 my-2";
      break;
    case "red":
      variantClass =
        "bg-red-500 text-white hover:bg-red-700 hover:scale-105 my-2";
      break;
    case "purple":
      variantClass =
        "bg-purple-500 text-white hover:bg-purple-700 hover:scale-105 my-2";
      break;
    case "venmo":
      variantClass =
        "bg-blue-500 text-white hover:bg-blue-700 hover:scale-105 my-2";
      break;
    case "back":
      variantClass =
        "bg-blue-500 text-white hover:bg-blue-700 hover:scale-105 my-2 mx-auto";
      break;
  }

  return (
    <button
      className={`${variantClass} px-6 py-3 rounded-lg transition-transform duration-200 focus:outline-none flex items-center justify-center`}
      {...props}
    >
      {variant === "venmo" && (
        <IonIcon icon={logoVenmo} className="mr-2 w-5 h-5" />
      )}
      {children}
    </button>
  );
};

export default Button;
