// src/components/Button.tsx
import React from "react";
import { IonIcon } from "@ionic/react";
import { logoVenmo } from "ionicons/icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "venmo";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  ...props
}) => {
  let variantClass = "";
  switch (variant) {
    case "primary":
      variantClass = "bg-finchGold text-darkBg hover:bg-yellow-500";
      break;
    case "secondary":
      variantClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    case "venmo":
      variantClass = "bg-[#3D95CE] text-white hover:bg-[#1E7DB8]";
      break;
    default:
      variantClass = "bg-finchGold text-darkBg hover:bg-yellow-500";
  }

  return (
    <button
      className={`${variantClass} px-4 py-2 rounded transition-transform duration-200 focus:outline-none`}
      {...props}
    >
      {variant === "venmo" && icon && (
        <IonIcon icon={logoVenmo} className="mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
