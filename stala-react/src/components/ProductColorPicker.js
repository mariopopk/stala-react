import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { colorsMap } from "../utils/data";
const queryString = require("query-string");

function ProductColorPicker({ colorOptions }) {
  const location = useLocation();
  const queryStr = queryString.parse(location.search);
  const selectedColor = queryStr.color || colorOptions[0].toLowerCase();

  return (
    <>
      <div className="letter-spacing-1 text-uppercase m-2">
        Color
        <span className="text-muted mx-2 letter-spacing-1">
          {selectedColor}
        </span>
      </div>
      {colorOptions.map((colorOption) => {
        colorOption = colorOption.toLowerCase();

        const isColorSelected = selectedColor === colorOption;

        return (
          <NavLink
            to={`${location.pathname}?color=${colorOption}`}
            className={`me-1 btn fs-2 ${
              colorOptions.length <= 1 ? "disabled" : "d"
            }`}
            key={colorOption}
          >
            <i
              className={
                "bi " +
                (isColorSelected ? "bi-check-circle-fill " : "bi-circle-fill ")
              }
              style={{
                color: colorsMap[colorOption],
              }}
            ></i>
          </NavLink>
        );
      })}
    </>
  );
}

export default ProductColorPicker;
