import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost" | "transparent";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  className = "",
  ...props
}) => {
  const variantClasses = {
    solid: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
    ghost: "text-green-600 hover:bg-green-100",
    transparent: "bg-transparent text-green-600 hover:underline",
  };

  const baseStyles = clsx(
    "px-4 py-2 rounded-lg font-medium transition-all duration-300",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    className
  );

  return (
    <button className={baseStyles} {...props}>
      {children}
    </button>
  );
};
