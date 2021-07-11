import { NavLink } from "react-router-dom";
import { categories as dbCategories } from "../utils/data";
import { getDepartments } from "../utils/helpers";

function DepartmentOptions() {
  const departments = getDepartments(dbCategories[0].subcategories);
  return (
    <>
      <ul className="list-unstyled m-0">
        {departments.map(({ id, name: department }) => {
          department = department.toLowerCase();
          return (
            <li key={id}>
              <NavLink
                className="text-decoration-none text-capitalize stala-link "
                activeClassName="fw-bold active"
                to={`/shop/${department}`}
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
