import { useState } from "react";
import VerticalCollapse from "../VerticalCollapse";

interface InputPanel {
  isOpen: boolean;
}

export const InputPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <VerticalCollapse isOpen={isOpen}>
      <VerticalCollapse.Toggle onChange={() => setIsOpen(!isOpen)} />
      <VerticalCollapse.Content>
        <p className="text-white">Hereee</p>
      </VerticalCollapse.Content>
    </VerticalCollapse>
  );
};
