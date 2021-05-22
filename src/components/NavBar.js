import { resolveHost } from "../utils/host";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

function NavBar() {
  //   const [isOpen, setCount] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="row container-fluid">
        <div className="col-4">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/shop"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/site/about"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 ">
          <div className="justify-content-center d-flex">
            <NavLink
              className="nav-link d-flex align-content-center"
              activeClassName="active"
              to="/"
            >
              <img
                src={resolveHost("/uploads/stala_ecommerce_1386643d25.svg")}
                alt=""
                width="30"
                height="24"
              />
              <span className="stala-logo">Stala</span>
            </NavLink>
          </div>
        </div>
        <div className="col-4">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
