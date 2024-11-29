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
  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "bg-finchGold text-darkBg hover:bg-yellow-500 hover:scale-105";
      break;
    case "secondary":
      variantStyles = "bg-red-500 text-white hover:bg-red-600 hover:scale-105";
      break;
    case "venmo":
      variantStyles =
        "bg-[#3D95CE] text-white hover:bg-[#1E7DB8] hover:scale-105 flex items-center justify-center";
      break;
    default:
      variantStyles =
        "bg-finchGold text-darkBg hover:bg-yellow-500 hover:scale-105";
  }

  return (
    <button
      className={`px-4 py-2 rounded transition-transform duration-200 transform focus:outline-none ${variantStyles}`}
      {...props}
    >
      {variant === "venmo" && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
