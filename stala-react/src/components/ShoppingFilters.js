import Accordion from "./Accordion";
import DepartmentOptions from "./DepartmentOptions";
import { Link } from "react-router-dom";
import CategoryOptions from "./CategoryOptions";
import { countQueries } from "../utils/queryStrings";

function ShoppingFilters({ location, department }) {
  const activeFilters = countQueries(location.search);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center border-bottom py-2">
        <Link
          to={location.pathname}
          className={
            "btn my-2 w-100 btn-outline-primary" +
            (activeFilters > 0 ? "" : " disabled ")
          }
        >
          {activeFilters > 0 ? "Clear Filters" : "All Products"}
          {activeFilters > 0 && (
            <span className="mx-2">&#40;{activeFilters}&#41;</span>
          )}
        </Link>
      </div>

      <Accordion
        items={[
          {
            title: "Department",
            key: 1,
            body: <DepartmentOptions />,
          },
          {
            title: "Category",
            key: 2,
            body: (
              <CategoryOptions location={location} department={department} />
            ),
          },
        ]}
        accordionName="filters"
      />
    </>
  );
}

export default ShoppingFilters;
