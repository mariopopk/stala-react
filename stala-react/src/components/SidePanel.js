import { useState } from "react";
import OutsideAlerter from "./OutsideAlerter";
import { lockBody } from "../utils/helpers";

function SidePanel({ sidePanelId, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (boolean) => {
    setIsOpen(boolean);
    lockBody(!isOpen);
  };

  const windowWidth = window.innerWidth;
  const panelWidth = windowWidth > 576 ? windowWidth * 0.45 : windowWidth;

  return (
    <>
      <div
        className={"position-fixed bg-white backdrop " + (isOpen ? "show" : "")}
      ></div>

      <OutsideAlerter
        active={isOpen}
        callback={() => {
          if (isOpen) handleClick(false);
        }}
      >
        <button
          className="btn text-dark btn-responsive"
          type="button"
          id={sidePanelId}
          data-bs-toggle="dropdown"
          aria-expanded={isOpen}
          onClick={() => handleClick(true)}
        >
          {title}
        </button>
        <div
          style={{ width: isOpen ? panelWidth : 0 }}
          className={"bg-dark text-white sidemenu " + (isOpen ? "show" : "")}
        >
          <div className="d-flex justify-content-between text-white p-4">
            <button
              onClick={() => handleClick(false)}
              className="btn btn-outline-light border-0"
            >
              <i className="bi bi-x-lg"></i>
              <span className="visually-hidden">Exit Search</span>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </OutsideAlerter>
    </>
  );
}

export default SidePanel;
