import { NavLink } from "react-router-dom";
import { categories as dbCategories } from "../utils/data";
import { getDepartments } from "../utils/helpers";

function DepartmentOptions({ queryString = "" }) {
  const departments = getDepartments(dbCategories.subcategories);
  return (
    <>
      <ul className="list-unstyled m-0">
        {departments.map(({ id, name: department }) => {
          department = department.toLowerCase();
          return (
            <li key={id}>
              <NavLink
                activeClassName="fw-bold"
                className="text-decoration-none text-capitalize"
                to={`/shop/${department}${queryString}`}
              >
                {department}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DepartmentOptions;
