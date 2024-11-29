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
      variantClass = "btn-primary";
      break;
    case "secondary":
      variantClass = "btn-secondary";
      break;
    case "venmo":
      variantClass = "btn-venmo";
      break;
    default:
      variantClass = "btn-primary";
  }

  return (
    <button className={`${variantClass}`} {...props}>
      {variant === "venmo" && icon && (
        <IonIcon icon={logoVenmo} className="mr-2" />
      )}
      {children}
    </button>
  );
};

export default Button;
