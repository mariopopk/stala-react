import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const panelClasses = isOpen
    ? " d-block vh-100 w-100 position-absolute bg-dark text-white p-4"
    : "";

  return (
    <>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={"collapse navbar-collapse " + panelClasses}
        id="navbarSupportedContent"
        style={{
          top: 62,
          bottom: 100,
          left: 0,
        }}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold text-uppercase  w-100 h-100">
          <li className="nav-item stala-nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/shop/women"
            >
              Women
            </NavLink>
          </li>
          <li className="nav-item stala-nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/shop/men"
            >
              Men
            </NavLink>
          </li>
          <li className="nav-item stala-nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/shop/kids"
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavLinks;
