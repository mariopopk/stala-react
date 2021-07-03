import NavUser from "./NavUser";

function NavUtilities() {
  return (
    <div className="d-flex justify-content-end ">
      <button className="btn text-dark">
        <i className="bi bi-search"></i>
        <span className="visually-hidden">Search Products</span>
      </button>

      <div className="d-none d-md-block">
        <NavUser />
      </div>

      <button className="btn text-dark">
        <i className="bi bi-cart"></i>
        <span className="visually-hidden">My Cart</span>
      </button>
    </div>
  );
}

export default NavUtilities;
