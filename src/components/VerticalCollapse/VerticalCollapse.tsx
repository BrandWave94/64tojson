import React from "react";
import { PxString } from "../../types/baseTypes";

interface VerticalCollapseProps {
  isOpen: boolean;
  minWidth?: PxString;
  maxWidth?: PxString;
  children: React.ReactNode;
}

export const VerticalCollapse: React.FC<VerticalCollapseProps> = ({
  isOpen,
  minWidth = "45px",
  maxWidth = "500px",
  children,
}) => {
  // #region Styles
  const classPanel =
    "h-full transition-[width] duration-300 overflow-hidden bg-gray-500";

  const panelStyle = { width: isOpen ? maxWidth : minWidth };
  // #endregion

  return (
    <div className={classPanel} style={panelStyle}>
      {children}
    </div>
  );
};
