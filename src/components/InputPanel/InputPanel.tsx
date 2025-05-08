import { useState } from "react";
import clsx from "clsx";
import VerticalCollapse from "../VerticalCollapse";
import { ChevronRight } from "lucide-react";

interface InputPanel {
  isOpen: boolean;
}

export const InputPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  // #region CSS
  const classContent = clsx(
    "text-gray-600 transition-all duration-300",
    isOpen ? "block" : "hidden"
  );
  // #endregion

  return (
    <VerticalCollapse isOpen={isOpen}>
      <div className="w-full h-full flex flex-col">
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <ChevronRight />
          </button>
        </div>
        <div className={classContent}>
          <p className="text-white">Here</p>
        </div>
      </div>
    </VerticalCollapse>
  );
};
