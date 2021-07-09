import { useState } from "react";
import OutsideAlerter from "./OutsideAlerter";

function Dropdown({ dropdownId, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (boolean) => {
    setIsOpen(boolean);
  };

  return (
    <>
      <OutsideAlerter
        active={isOpen}
        callback={() => {
          if (isOpen) handleClick(false);
        }}
      >
        <div className="dropdown">
          <button
            className="btn text-dark "
            type="button"
            id={dropdownId}
            data-bs-toggle="dropdown"
            aria-expanded={isOpen}
            onClick={() => handleClick(!isOpen)}
          >
            {title}
          </button>
          <div
            className={
              "dropdown-menu border-0 dropdown-menu-dark " +
              (isOpen ? "d-block" : "d-none")
            }
            aria-labelledby={dropdownId}
            style={{ right: 0 }}
          >
            {children}
          </div>
        </div>
      </OutsideAlerter>
    </>
  );
}

export default Dropdown;
