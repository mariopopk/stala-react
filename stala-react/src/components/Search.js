import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <form className="">
        <label
          htmlFor="search-stala"
          className="form-label letter-spacing-2 text-uppercase"
        >
          Search
        </label>
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            id="search-stala"
            className="form-control text-white border-light py-2 me-3"
            style={{ width: 500, borderWidth: 0, borderBottomWidth: 1 }}
          />
          <Link to="/search/" className="btn btn-outline-light  ">
            <i className="bi bi-search"></i>
            <span className="visually-hidden">Search Query</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Search;
