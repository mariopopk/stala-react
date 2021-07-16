import { Link } from "react-router-dom";

function NavShipping() {
  return (
    <>
      <Link className="btn" to="/shipping-status">
        <i className="bi bi-truck fs-5"></i>
        <span className="visually-hidden">My Shipping</span>
      </Link>
    </>
  );
}

export default NavShipping;
