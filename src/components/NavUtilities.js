import NavUser from "./NavUser";

function NavUtilities() {
  return (
    <div className="d-flex justify-content-end ">
      <button className="btn text-dark">
        <i className="bi bi-search"></i>
      </button>
      <NavUser />

      <button className="btn text-dark">
        <i className="bi bi-cart"></i>
      </button>
    </div>
  );
}

export default NavUtilities;
