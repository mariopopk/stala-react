import { NavLink } from "react-router-dom";
import { processQuery, lookUpQueryValue } from "../utils/queryStrings";
import { priceRanges } from "../utils/data";

function PriceOptions({ location, department }) {
  const queryStr = location.search;
  const filterName = "priceRanges";

  return (
    <>
      <ul className="list-unstyled mt-2">
        {priceRanges.map(({ name: priceRange, id }) => {
          const identifier = id;
          const query = processQuery(queryStr, filterName, identifier);
          const isActiveFilter = lookUpQueryValue(
            queryStr,
            filterName,
            identifier
          );

          return (
            <li key={id}>
              <NavLink
                isActive={() => {
                  return isActiveFilter;
                }}
                className="text-decoration-none checkbox-item"
                activeClassName="fw-bold  "
                to={`/shop/${department}?${query}`}
              >
                {isActiveFilter && <i className="bi bi-check"></i>}
                {priceRange}
              </NavLink>
            </li>
          );
        })}{" "}
      </ul>
    </>
  );
}

export default PriceOptions;
