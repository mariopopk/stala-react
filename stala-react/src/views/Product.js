import { useParams } from "react-router";
import { resolveHost } from "../utils/host";
import { getDepartmentById, getProductFamily } from "../utils/helpers";
import { categories, products } from "../utils/data";
import Breadcrumbs from "../components/Breadcrumbs";
import { keyColors } from "../utils/data";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import { lookUpQueryValue, replaceQuery } from "../utils/queryStrings";
const queryString = require("query-string");

function getProductByColor(color, products) {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].color.toLowerCase(), color);
    if (products[i].color.toLowerCase() === color) return products[i];
  }
  return null;
}

function Product() {
  const { slug: familyId } = useParams();
  const location = useLocation();
  const { color: currentColor, size: currentSize } = queryString.parse(
    location.search
  );
  const productsInSameFamily = getProductFamily(familyId, products);

  const {
    id,
    name,
    color,
    price,
    sizes,
    category: categoryId,
    department: departmentId,
    image,
  } = getProductByColor(currentColor, productsInSameFamily) ||
  productsInSameFamily[0];

  const category = getDepartmentById(categories, categoryId, "subcategories");
  const department = getDepartmentById(
    categories,
    departmentId,
    "subcategories"
  );

  const sizesKeys = [];

  for (let size in sizes) {
    sizesKeys.push(size);
  }

  const links = [
    { name: "Home", link: "", id: 1 },
    {
      name: department.name,
      link: "/shop/" + department.name + "/categories",
      id: 2,
    },
    {
      name: category.name,
      link: "/shop/" + department.name + "?categories=" + categoryId,
      id: 3,
    },
    {
      name: name,
      id: 4,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mb-5 mt-3 d-flex d-md-block justify-content-center">
            <Breadcrumbs links={links} />
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div style={{ maxWidth: 500 }}>
              <img src={resolveHost(image)} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div style={{ maxWidth: 500 }}>
              <p className="display-5">
                {name} - {color}
              </p>
              <p className="lead">${price}</p>
              <div className="mt-4">
                <div className="letter-spacing-1 text-uppercase m-2">
                  Color
                  <span className="text-muted mx-2 letter-spacing-1">
                    {color}
                  </span>
                </div>
                {productsInSameFamily.map(({ color }, i) => {
                  const link =
                    location.pathname + "?color=" + color.toLowerCase();
                  const isActive = currentColor === color.toLowerCase();

                  return (
                    <NavLink to={link} className="me-1 btn fs-2 " key={color}>
                      <i
                        className={
                          "bi " +
                          (isActive
                            ? "bi-check-circle-fill "
                            : "bi-circle-fill ")
                        }
                        style={{
                          color: keyColors[color.toLowerCase()],
                        }}
                      ></i>
                    </NavLink>
                  );
                })}
              </div>
              <div className="mt-4">
                <div className=" m-2">
                  <span className="letter-spacing-1 text-uppercase">Size</span>
                </div>
                <ul className="list-unstyled ">
                  <div className="row row-cols-3 g-3" style={{ maxWidth: 250 }}>
                    {sizesKeys.map((size) => {
                      const count = sizes[size];
                      const link =
                        location.pathname +
                        "?" +
                        replaceQuery(location.search, "size", size);

                      const isActiveFilter = lookUpQueryValue(
                        location.search,
                        "size",
                        size
                      );

                      if (count <= 0)
                        return (
                          <li key={size}>
                            <NavLink
                              to={link}
                              isActive={() => {
                                return isActiveFilter;
                              }}
                              activeClassName="btn-primary disabled"
                              className="btn btn-sm  text-decoration-line-through border text-uppercase w-100 py-3"
                            >
                              {size}
                            </NavLink>
                          </li>
                        );
                      return (
                        <li key={size}>
                          <NavLink
                            isActive={() => {
                              return isActiveFilter;
                            }}
                            activeClassName="btn-primary"
                            to={link}
                            className="btn btn-sm  border  text-uppercase w-100 py-3"
                          >
                            {size}
                          </NavLink>
                        </li>
                      );
                    })}
                  </div>
                </ul>
                <div className="d-flex justify-content-end">
                  <Modal title={<span>Size Guide</span>}>
                    <p>
                      We are fully compliant with standard sizes in all of our
                      departments. For a comprehensive size guide, click here:
                      <a
                        className="letter-spacing-1 fw-bold"
                        href="https://www.sizeguide.net/"
                      >
                        {" "}
                        SIZEGUIDE.NET
                      </a>
                    </p>
                  </Modal>
                </div>
              </div>
              {currentSize && sizes[currentSize] <= 0 ? (
                <div
                  className="ps-3 border-danger text-danger letter-spacing-1 lead"
                  role="alert"
                  style={{
                    borderWidth: "0 0 0 4px",
                    borderStyle: "solid",
                  }}
                >
                  Size is not available{" "}
                </div>
              ) : (
                <span className="text-muted letter-spacing-1 lead">
                  In Stock
                </span>
              )}
              <div className="d-flex mt-5">
                <select
                  style={{ maxWidth: 70 }}
                  className="form-select"
                  aria-label="1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>

                <button
                  disabled={
                    !(currentColor && currentSize) || sizes[currentSize] <= 0
                  }
                  className="btn btn-primary w-100 ms-2 py-2 btn-lg "
                >
                  {!(currentColor && currentSize)
                    ? "Size is not selected"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
