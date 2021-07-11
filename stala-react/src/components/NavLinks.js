import { NavLink } from "react-router-dom";
import { useState } from "react";
import OutsideAlerter from "./OutsideAlerter";
import { lockBody } from "../utils/helpers";
function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (boolean) => {
    setIsOpen(boolean);
    lockBody(boolean);
  };

  const topCategories = [
    { id: 1, name: "Women" },
    { id: 2, name: "Men" },
    { id: 3, name: "Girls" },
    { id: 4, name: "Boys" },
  ];

  return (
    <>
      <OutsideAlerter
        active={isOpen}
        callback={() => {
          if (isOpen) handleClick(false);
        }}
      >
        <button
          className="navbar-toggler border-0 btn-responsive ps-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleClick(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            "collapse navbar-collapse bg-white " +
            (isOpen ? " sidemenu-nav" : "")
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase  w-100 h-100">
            {topCategories.map(({ id, name }) => {
              return (
                <li key={id} className="nav-item stala-nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={`/shop/${name.toLowerCase()}/categories`}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </OutsideAlerter>
    </>
  );
}

export default NavLinks;
