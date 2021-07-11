import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { products, categories } from "../utils/data";
import { getDepartmentById, getDepartmentBySlug } from "../utils/helpers";
import { lookUpQueryValue, countQueries } from "../utils/queryStrings";

function ShoppingGrid({ location, department }) {
  const queryStr = location.search;
  const activeFilters = countQueries(queryStr);
  const activeDepartment = getDepartmentBySlug(
    department,
    categories[0].subcategories
  );

  return (
    <div className="row">
      {products.map(
        ({
          id,
          image,
          familyId,
          name,
          price,
          color,
          category,
          department: departmentId,
        }) => {
          const categoryName = getDepartmentById(
            categories,
            category,
            "subcategories"
          ).name;

          const isSelectedFilter = lookUpQueryValue(
            queryStr,
            "categories",
            category.toString()
          );

          const isSelectedDepartment = activeDepartment.id === departmentId;

          const anyActiveFilters = activeFilters > 0;

          if (!isSelectedDepartment) {
            return null;
          }

          if (!anyActiveFilters) {
          } else if (!isSelectedFilter) {
            return null;
          }

          return (
            <div className="col-md-6 col-lg-4 col-6 p-0" key={id}>
              <Link
                className="text-decoration-none m-0"
                to={"/shop/product/" + familyId}
              >
                <ProductCard
                  imageAlt={name}
                  title={name + " " + color}
                  price={"$" + price.toString()}
                  image={image}
                  category={categoryName}
                />
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ShoppingGrid;
