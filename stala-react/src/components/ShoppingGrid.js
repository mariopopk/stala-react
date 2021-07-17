import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { products, categories } from "../utils/data";
import { getDepartmentById, getDepartmentBySlug } from "../utils/helpers";
import { lookUpQueryValue } from "../utils/queryStrings";
const queryString = require("query-string");

function ShoppingGrid({ location, department: departmentSlug }) {
  const queryStr = location.search;
  const queryObj = queryString.parse(queryStr);
  const {
    categories: selectedCategories,
    colors: selectedColors,
    priceRanges: selectedPriceRanges,
    sizes: selectedSizes,
  } = queryObj;

  // const activeFiltersCount = countQueries(queryStr);
  const activeDepartment = getDepartmentBySlug(
    departmentSlug,
    categories[0].subcategories
  );

  const showProducts = products.map(
    ({
      id,
      image,
      familyId,
      name,
      price,
      color,
      category,
      sizes,
      department: departmentId,
    }) => {
      const categoryName = getDepartmentById(
        categories,
        category,
        "subcategories"
      ).name;

      // Department Filter BELOW
      const isSelectedDepartment = activeDepartment.id === departmentId;
      if (!isSelectedDepartment) {
        return null;
      }
      // Department Filter ABOVE

      // Category Filter BELOW
      if (selectedCategories) {
        const matchesSelectedCategory = lookUpQueryValue(
          queryStr,
          "categories",
          category.toString()
        );
        if (!matchesSelectedCategory) {
          return;
        }
      }
      // Category Filter ABOVE

      // Color Filter BELOW
      if (selectedColors) {
        const matchesSelectedColor = lookUpQueryValue(
          queryStr,
          "colors",
          color
        );
        if (!matchesSelectedColor) {
          return;
        }
      }
      // Color Filter ABOVE

      // Size Filter BELOW
      if (selectedPriceRanges) {
        let range = "";
        if (price < 25) {
          range = "0-25";
        } else if (price > 25 && price < 50) {
          range = "25-50";
        } else {
          range = "50-100";
        }
        const matchesSelectedPriceRange = lookUpQueryValue(
          queryStr,
          "priceRanges",
          range
        );

        if (!matchesSelectedPriceRange) {
          return;
        }
      }
      // Size Filter Above

      // Size Filter BELOW
      if (selectedSizes) {
        if (sizes) {
          const selectedSizesArr = selectedSizes.split(",");
          const availabilities = selectedSizesArr.map((selectedSize) => {
            return sizes[selectedSize] && sizes[selectedSize] > 0;
          });

          const matchesSelectedSizes = availabilities.includes(true);

          if (!matchesSelectedSizes) {
            return;
          }
        }
      }
      // Size Filter Above

      return (
        <div className="col-md-6 col-lg-4 col-6 p-0" key={id}>
          <Link
            className="text-decoration-none m-0"
            to={"/shop/product/" + familyId + "?color=" + color.toLowerCase()}
          >
            <ProductCard
              imageAlt={name}
              title={name + " - " + color}
              price={"$" + price.toString()}
              image={image}
              category={categoryName}
            />
          </Link>
        </div>
      );
    }
  );

  return <div className="d-flex flex-wrap">{showProducts}</div>;
}

// console.log(
//   queryStr,
//   selectedCategories,
//   selectedColors,
//   selectedPriceRanges,
//   selectedSizes
// );

export default ShoppingGrid;
