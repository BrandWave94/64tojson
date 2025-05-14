import React from "react";
import clsx from "clsx";

export interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  variant?: "background" | "border" | "lineal" | "transparent";
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  ariaLabel = "",
  variant = "background", // valor por defecto
}) => {
  const variantClasses = {
    background: "bg-gray-700 text-white hover:bg-gray-600",
    border: "border border-gray-500 text-gray-700 hover:border-gray-700",
    lineal: "border border-transparent text-gray-700 hover:border-current",
    transparent: "bg-tranparent hover:bg-[#1E1E1E] text-gray-700",
  };

  const baseStyles = clsx(
    "w-fit flex items-center justify-center rounded-full cursor-pointer",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "transition-all duration-300 ease-in-out",
    "p-1 m-1",
    variantClasses[variant],
    className
  );

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
