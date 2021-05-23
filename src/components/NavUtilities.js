function NavUtilities() {
  return (
    <div className="d-flex justify-content-end">
      {/* <form className="d-flex">
        <input
          className="form-control me-2 text-uppercase border-top-0 border-end-0 border-start-0 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form> */}
      <button className="btn ">
        <i className="bi bi-search"></i>
      </button>

      <button className="btn ">
        <i className="bi bi-person lead"></i>
      </button>

      <button className="btn ">
        <i className="bi bi-cart"></i>
      </button>
    </div>
  );
}

export default NavUtilities;
