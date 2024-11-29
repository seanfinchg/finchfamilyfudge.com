import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded transition-transform duration-200 transform focus:outline-none";

  const variantStyles =
    variant === "primary"
      ? "bg-finchGold text-darkBg hover:bg-yellow-500 hover:scale-105"
      : "bg-red-500 text-white hover:bg-red-600 hover:scale-105";

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
