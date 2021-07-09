import Accordion from "./Accordion";
import DepartmentOptions from "./DepartmentOptions";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import CategoryOptions from "./CategoryOptions";

function ShoppingFilters({
  categories,
  colors,
  priceRange,
  sizes,
  productsLength = 0,
  location,
  department,
}) {
  return (
    <>
      {/* <div className="d-flex justify-content-between align-items-center border-top border-bottom py-2">
        <span className="fw-bold">{productsLength} Items</span>
        <Link
          to={location.pathname}
          className="btn btn-outline-primary btn-sm my-2 "
        >
          Clear Filters
          <span className="mx-2"></span>
        </Link>
      </div> */}

      <Accordion
        items={[
          {
            title: "Department",
            key: 1,
            body: <DepartmentOptions queryString={location.search} />,
          },
          {
            title: "Category",
            key: 2,
            body: (
              <CategoryOptions
                categories={categories}
                location={location}
                department={department}
              />
            ),
          },
        ]}
        accordionName="filters"
      />
    </>
  );
}

export default ShoppingFilters;
