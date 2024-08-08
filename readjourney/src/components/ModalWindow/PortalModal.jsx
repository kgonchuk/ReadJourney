import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";
import { ModalContainer } from "./PortalModal.styled";

export default function PortalModal({ active, setActive, children }) {
  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };

    const handleBodyScroll = (disableScroll) => {
      if (disableScroll) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    };

    if (active) {
      document.addEventListener("keydown", closeModal);
      handleBodyScroll(true);
    } else {
      document.removeEventListener("keydown", closeModal);
      handleBodyScroll(false);
    }

    return () => {
      document.removeEventListener("keydown", closeModal);
      handleBodyScroll(false);
    };
  }, [active, setActive]);

  return createPortal(
    <ModalContainer
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </ModalContainer>,
    document.body
  );
}
