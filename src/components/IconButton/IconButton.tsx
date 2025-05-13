import React from "react";
import clsx from "clsx";

export interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  ariaLabel = "",
}) => {
  const baseStyles = clsx(
    "inline-flex items-center justify-center rounded-full",
    "bg-gray-700 text-white hover:bg-gray-600",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "transition-colors duration-200 ease-in-out",
    "p-2",
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
