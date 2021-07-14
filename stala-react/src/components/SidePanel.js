import { useState } from "react";
import OutsideAlerter from "./OutsideAlerter";
import { lockBody } from "../utils/helpers";

function SidePanel({
  sidePanelId,
  title,
  children,
  darkMode = false,
  handleClosingEventsAutomatically = true,
  doneBtn = false,
  btnClassName = "btn btn-responsive",
  panelTitle,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (boolean) => {
    setIsOpen(boolean);
    lockBody(!isOpen);
  };

  const panelBtnClassName = "btn btn-outline-secondary btn-responsive border-0";
  const containerClassName = darkMode
    ? "bg-dark text-white"
    : "bg-white text-dark";

  const backdropClassName = darkMode ? "bg-white" : "bg-dark";

  const windowWidth = window.innerWidth;
  const panelWidth = windowWidth > 576 ? windowWidth * 0.6 : windowWidth;

  return (
    <>
      <div
        className={
          "position-fixed backdrop " +
          backdropClassName +
          " " +
          (isOpen ? "show" : "")
        }
      ></div>

      <OutsideAlerter
        active={handleClosingEventsAutomatically}
        callback={() => {
          if (isOpen) handleClick(false);
        }}
      >
        <button
          className={btnClassName}
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
          className={
            "sidemenu " + containerClassName + " " + (isOpen ? "show" : "")
          }
        >
          <div className="d-flex flex-wrap p-4">
            <div className="col-4">
              <button
                onClick={() => handleClick(false)}
                className={panelBtnClassName}
              >
                <i className="bi bi-x-lg"></i>
                <span className="visually-hidden">Exit</span>
              </button>
            </div>

            <div className="col-4">{panelTitle}</div>
          </div>
          <div>{children}</div>
          {doneBtn && (
            <div className="position-fixed w-100" style={{ bottom: 0 }}>
              {" "}
              <button
                onClick={() => handleClick(false)}
                className={
                  "btn btn-success d-flex justify-content-center w-100 btn-lg "
                }
              >
                Done
              </button>{" "}
            </div>
          )}
        </div>
      </OutsideAlerter>
    </>
  );
}

export default SidePanel;
