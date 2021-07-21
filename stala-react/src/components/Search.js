import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <form className="">
        <label
          htmlFor="search-stala-shop"
          className="form-label letter-spacing-1 fw-bold fs-5 alt-font"
        >
          Search
        </label>
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            id="search-stala-shop"
            className="form-control border-primary py-2 me-1"
            style={{ maxWidth: 500, borderWidth: 0, borderBottomWidth: 1 }}
          />
          <Link to="/search/" className="btn  ">
            <i className="bi bi-search"></i>
            <span className="visually-hidden">Search Query</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Search;
