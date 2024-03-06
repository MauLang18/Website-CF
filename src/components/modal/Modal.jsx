import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => {
    // Verifica si el clic se realizó fuera del DialogBody
    if (isOpen && !e.target.closest(".modal-dialog-body")) {
      console.log("clic fuera");
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
        className="space-y-4 overflow-auto max-h-[400px] modal-dialog-body"
        style={{ overflowY: "auto" }}
        onClick={handleModalContainerClick}
      >
        {children}
      </DialogBody>
    </Dialog>
  );
};

export default Modal;
