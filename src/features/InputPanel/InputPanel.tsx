import { useState } from "react";
import { Button, TextArea, VerticalCollapse } from "../../components";

interface InputPanel {
  isOpen: boolean;
}

export const InputPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <VerticalCollapse isOpen={isOpen}>
      <VerticalCollapse.Toggle onChange={() => setIsOpen(!isOpen)} />
      <VerticalCollapse.Content>
        <div className="h-full w-full flex flex-col">
          <div className="p-4 min-w-28 h-full">
            <TextArea placeholder="Type here..." />
          </div>
          <div className="flex justify-end p-5 pt-0">
            <Button>Send</Button>
          </div>
        </div>
      </VerticalCollapse.Content>
    </VerticalCollapse>
  );
};
