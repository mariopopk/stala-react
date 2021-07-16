import { useState } from "react";
import { lockBody } from "../utils/helpers";

function Modal({ modalId = "Modal", title, children }) {
  const [isOpen, setIsOpen] = useState();
  const handleClick = (boolean) => {
    setIsOpen(boolean);
    lockBody(!isOpen);
  };
  return (
    <div>
      <div
        className={"position-fixed backdrop bg-dark " + (isOpen ? "show" : "")}
      ></div>

      <button
        onClick={() => handleClick(!isOpen)}
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      >
        {title}
      </button>

      <div
        className={"modal fade " + (isOpen ? "show" : "")}
        style={isOpen ? { display: "block", zIndex: 10003 } : {}}
        id={modalId}
        tabIndex="-1"
        aria-labelledby={"labelFor" + modalId}
        aria-hidden={!isOpen}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={"labelFor" + modalId}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleClick(false)}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                onClick={() => handleClick(false)}
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
