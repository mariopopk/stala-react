import { NavLink } from "react-router-dom";
import { processQuery, lookUpQueryValue } from "../utils/queryStrings";
import { sizes } from "../utils/data";

function SizeOptions({ location, department }) {
  const queryStr = location.search;
  const filterName = "sizes";

  return (
    <>
      <ul className="list-unstyled mt-2">
        <div className="row row-cols-3 g-3" style={{ maxWidth: 175 }}>
          {sizes.map(({ name: size }) => {
            const identifier = size;
            const query = processQuery(queryStr, filterName, identifier);
            const isActiveFilter = lookUpQueryValue(
              queryStr,
              filterName,
              identifier
            );

            return (
              <li key={size}>
                <NavLink
                  isActive={() => {
                    return isActiveFilter;
                  }}
                  className="btn btn-sm border text-uppercase w-100 py-2"
                  activeClassName="btn-primary text-white  "
                  to={`/shop/${department}?${query}`}
                >
                  {/* {isActiveFilter ? (
                  <i className="bi bi-slash-square-fill mx-2"></i>
                ) : (
                  <i className="bi bi-square mx-2"></i>
                )} */}

                  {size}
                </NavLink>
              </li>
            );
          })}{" "}
        </div>
      </ul>
    </>
  );
}

export default SizeOptions;
