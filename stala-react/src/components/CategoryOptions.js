import { categories as dbCategories } from "../utils/data";
import { getDepartmentBySlug } from "../utils/helpers";
import { NavLink } from "react-router-dom";

function CategoryOptions({ location, department, categories }) {
  const activeDepartment = getDepartmentBySlug(
    department,
    dbCategories.subcategories
  );

  categories = categories && categories.split(",");

  return (
    <>
      <ul className="list-unstyled">
        {activeDepartment.subcategories.map(({ id, name: category }) => {
          const link = "/shop/boys/?categories=sale,shorts,jeans";
          return (
            <li key={id}>
              <NavLink
                isActive={() => {
                  const isActiveFilter =
                    categories && categories.includes(category.toLowerCase());
                  return isActiveFilter;
                }}
                className="text-decoration-none"
                activeClassName="fw-bold"
                to={link}
              >
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
