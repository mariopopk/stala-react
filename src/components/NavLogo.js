import { NavLink } from "react-router-dom";

function NavLogo() {
  return (
    <div className="justify-content-center d-flex">
      <NavLink
        className="nav-link d-flex align-content-center lead text-light"
        activeClassName="active"
        to="/"
      >
        <i className="bi bi-bag me-2"></i>
        <span className="stala-logo">STALA</span>
      </NavLink>
    </div>
  );
}

export default NavLogo;
