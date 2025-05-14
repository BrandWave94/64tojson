import React from "react";
import clsx from "clsx";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className = "",
  ...props
}) => {
  return (
    <textarea
      className={clsx(
        "w-full h-full resize-none", // ocupa todo el espacio
        "bg-white dark:bg-gray-900",
        "text-gray-800 dark:text-white",
        "rounded-xl p-4",
        "border border-gray-300 dark:border-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500",
        "transition-all duration-300 ease-in-out",
        "placeholder-gray-400 dark:placeholder-gray-500",
        className
      )}
      {...props}
    />
  );
};
