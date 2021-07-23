import { getDepartmentById } from "../utils/helpers";
import { categories as categoryData } from "../utils/data";
import { Link, useLocation } from "react-router-dom";
import { processQuery } from "../utils/queryStrings";

function FilterTags({ categories, colors, priceRanges, sizes }) {
  const location = useLocation();
  const selectedCategories = categories && categories.split(",");
  const selectedColors = colors && colors.split(",");
  const selectedPriceRange = priceRanges && priceRanges.split(",");
  const selectedSizes = sizes && sizes.split(",");

  console.log(
    selectedCategories,
    selectedColors,
    selectedPriceRange,
    selectedSizes
  );

  return (
    <div
      className="mb-4 d-flex flex-wrap justify-content-end"
      style={{ minHeight: "3rem" }}
    >
      {selectedCategories &&
        selectedCategories.map((categoryId) => {
          const categoryName = getDepartmentById(
            categoryData,
            Number(categoryId),
            "subcategories"
          ).name;

          return (
            <span
              key={categoryId}
              className="badge  text-dark rounded-pill border border-secondary table-secondary d-inline-flex align-items-center mx-1 mb-3 ps-3"
            >
              {categoryName}
              <Link
                to={`${location.pathname}?${processQuery(
                  location.search,
                  "categories",
                  categoryId
                )}`}
                className="btn  ms-1 p-0 px-1"
              >
                <i className="bi bi-x"></i>
                <span className="visually-hidden">Remove Filter</span>
              </Link>
            </span>
          );
        })}
    </div>
  );
}

export default FilterTags;
