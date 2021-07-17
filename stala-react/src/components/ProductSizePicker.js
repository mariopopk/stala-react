import { NavLink, useLocation } from "react-router-dom";
import { replaceQuery } from "../utils/queryStrings";
const queryString = require("query-string");

function ProductSizePicker({ sizesInventory = {} }) {
  const location = useLocation();
  const sizesOptions = Object.keys(sizesInventory);
  const queryStr = queryString.parse(location.search);
  const selectedSize = queryStr.size;

  console.log("sizes", sizesInventory);

  if (sizesOptions.length < 1)
    return (
      <div className="m-2 letter-spacing-1">
        <span className=" text-uppercase">Size</span>
        <span className="text-uppercase mx-2 text-muted">Unique</span>
      </div>
    );

  return (
    <>
      <div className="m-2">
        <span className="letter-spacing-1 text-uppercase">Size</span>
        <span className="text-muted letter-spacing-1 text-uppercase mx-2">
          {selectedSize ? (
            selectedSize
          ) : (
            <span className="text-decoration-underline">Not selected</span>
          )}
        </span>
      </div>
      <ul className="list-unstyled ">
        <div className="row row-cols-3 g-3" style={{ maxWidth: 250 }}>
          {sizesOptions.map((sizeOption) => {
            const inventoryCount = sizesInventory[sizeOption];
            const link = `${location.pathname}?${replaceQuery(
              location.search,
              "size",
              sizeOption
            )}`;
            const isSizeSelected = sizeOption === selectedSize;
            return (
              <li key={sizeOption}>
                <NavLink
                  to={link}
                  isActive={() => {
                    return isSizeSelected;
                  }}
                  activeClassName={`btn-primary ${
                    inventoryCount < 1 ? "disabled" : ""
                  }`}
                  className={`btn btn-sm border text-uppercase w-100 py-3 ${
                    inventoryCount < 1 ? "text-decoration-line-through" : ""
                  }`}
                >
                  {sizeOption}
                </NavLink>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export default ProductSizePicker;
