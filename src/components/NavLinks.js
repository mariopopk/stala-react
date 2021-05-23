import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

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
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold text-uppercase ">
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
