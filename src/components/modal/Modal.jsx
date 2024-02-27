import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = () => {
    if (isOpen) {
      closeModal();
    }
  };

  return (
    <Dialog
      open={isOpen}
      handler={closeModal}
      className={`modal ${isOpen && "is-open"}`}
    >
      <DialogBody
        className="space-y-4 overflow-auto max-h-[400px]"
        style={{ overflowY: "auto" }}
        onClick={handleModalContainerClick}
      >
        {children}
      </DialogBody>
    </Dialog>
  );
};

export default Modal;
