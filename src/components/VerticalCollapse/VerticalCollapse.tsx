import React, { createContext, useContext } from "react";
import clsx from "clsx";
import { ChevronRight, ChevronLeft } from "lucide-react";
import IconButton from "../IconButton";
import { PxString } from "../../types/baseTypes";

// #region ---------------- Types --------------------
interface VerticalCollapseProps {
  isOpen: boolean;
  minWidth?: PxString;
  maxWidth?: PxString;
  children: React.ReactNode;
}
// #endregion

// #region  -------------------- Styles --------------------
const collapsedStyles =
  "h-full transition-[width] duration-300 overflow-hidden bg-gray-500";
const CollapseContext = createContext<{ isOpen: boolean }>({ isOpen: false });
// #endregion

// #region -------------------- COLLAPSE CONTENT --------------------
// This component is used to show or hide the content inside the collapse
const CollapseContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen } = useContext(CollapseContext);

  const classContent = clsx(
    "text-gray-600 transition-all duration-400 bg-red-300 overflow-hidden",
    isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
  );

  return <div className={classContent}>{children}</div>;
};
// #endregion

// #region -------------------- COLLAPSE TOGGLE --------------------
// This component is used to toggle the collapse
const CollapseToggle: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const { isOpen } = useContext(CollapseContext);

  return (
    <IconButton
      onClick={() => {
        onChange();
      }}
    >
      {isOpen ? <ChevronLeft /> : <ChevronRight />}
    </IconButton>
  );
};
// #endregion

// #region ---------------- VERTICAL COLLAPSE --------------------
// This component is used to create a vertical collapse panel
export const VerticalCollapse: React.FC<VerticalCollapseProps> & {
  Content: typeof CollapseContent;
  Toggle: typeof CollapseToggle;
} = ({ isOpen, minWidth = "45px", maxWidth = "500px", children }) => {
  const panelStyle = { width: isOpen ? maxWidth : minWidth };

  return (
    <CollapseContext.Provider value={{ isOpen }}>
      <div className={collapsedStyles} style={panelStyle}>
        <div className="w-full h-full flex flex-col">{children}</div>
      </div>
    </CollapseContext.Provider>
  );
};
// #endregion

// #region Export
VerticalCollapse.Content = CollapseContent;
VerticalCollapse.Toggle = CollapseToggle;
// #endregion
