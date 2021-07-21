import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link
      className="nav-link d-flex align-items-center lead text-primary text-uppercase"
      to="/"
    >
      <i className="bi bi-bag me-2 icon-bold "></i>
      <span className="letter-spacing-2 fw-bold text-uppercase">Stala</span>
    </Link>
  );
}

export default NavLogo;
