import { NavLink } from "react-router-dom";
import { processQuery, lookUpQueryValue } from "../utils/queryStrings";
import { colors } from "../utils/data";

function ColorOptions({ location, department }) {
  const queryStr = location.search;
  const filterName = "colors";

  return (
    <>
      <ul className="list-unstyled mt-2">
        <div className="row row-cols-2 g-1">
          {colors.map(({ name: color, alt }) => {
            const identifier = color;
            const query = processQuery(queryStr, filterName, identifier);
            const isActiveFilter = lookUpQueryValue(
              queryStr,
              filterName,
              identifier
            );

            return (
              <li key={alt}>
                <NavLink
                  isActive={() => {
                    return isActiveFilter;
                  }}
                  className="text-decoration-none checkbox-item"
                  activeClassName="fw-bold"
                  to={`/shop/${department}?${query}`}
                >
                  {isActiveFilter ? (
                    <i
                      className="bi bi-circle-fill me-2"
                      style={{ color: alt }}
                    ></i>
                  ) : (
                    <i className="bi bi-circle me-2"></i>
                  )}

                  {color}
                </NavLink>
              </li>
            );
          })}{" "}
        </div>
      </ul>
    </>
  );
}

export default ColorOptions;
