import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link
      className="nav-link d-flex align-content-center lead text-dark"
      to="/"
    >
      <i className="bi bi-bag me-2"></i>
      <span className="stala-logo">STALA</span>
    </Link>
  );
}

export default NavLogo;
