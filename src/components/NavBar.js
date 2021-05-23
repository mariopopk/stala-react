import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavUtilities from "./NavUtilities";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="col-4">
          <NavLinks />
        </div>
        <div className="col-4 ">
          <div className="justify-content-center d-flex">
            <NavLink
              className="nav-link d-flex align-content-center lead"
              activeClassName="active"
              to="/"
            >
              <i className="bi bi-bag me-2"></i>
              <span className="stala-logo">STALA</span>
            </NavLink>
          </div>
        </div>
        <div className="col-4">
          <NavUtilities />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
