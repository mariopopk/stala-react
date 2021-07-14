import { categories as dbCategories } from "../utils/data";
import { getDepartmentBySlug } from "../utils/helpers";
import { NavLink } from "react-router-dom";
import { processQuery, lookUpQueryValue } from "../utils/queryStrings";

function CategoryOptions({ location, department }) {
  const activeDepartment = getDepartmentBySlug(
    department,
    dbCategories[0].subcategories
  );

  const queryStr = location.search;

  return (
    <>
      <ul className="list-unstyled">
        {activeDepartment.subcategories.map(({ id, name: category }) => {
          const query = processQuery(queryStr, "categories", id.toString());

          const isActiveFilter = lookUpQueryValue(
            queryStr,
            "categories",
            id.toString()
          );

          return (
            <li key={id}>
              <NavLink
                isActive={() => {
                  return isActiveFilter;
                }}
                className="text-decoration-none checkbox-item"
                activeClassName="fw-bold"
                to={`/shop/${department}?${query}`}
              >
                {isActiveFilter ? (
                  <i className="bi bi-slash-circle-fill me-2"></i>
                ) : (
                  <i className="bi bi-circle me-2"></i>
                )}

                {category}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategoryOptions;
