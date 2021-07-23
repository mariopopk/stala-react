import { useParams } from "react-router";
import { resolveHost } from "../utils/host";
import { getDepartmentById, getProductFamily } from "../utils/helpers";
import { categories, products } from "../utils/data";
import Breadcrumbs from "../components/Breadcrumbs";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../redux/cart/cart.actions";
import ProductColorPicker from "../components/ProductColorPicker";
import SizeGuide from "../components/SizeGuide";
import ProductSizePicker from "../components/ProductSizePicker";
import ProductInventoryAlert from "../components/ProductInventoryAlert";
import { useState } from "react";
import DisappearingAlert from "../components/DisappearingAlert";
const queryString = require("query-string");

function getProductByColor(color, products) {
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].color.toLowerCase(), color);
    if (products[i].color.toLowerCase() === color) return products[i];
  }
  return null;
}

function Product({ addProduct }) {
  const [amount, setAmount] = useState(1);
  const { slug: familyId } = useParams();
  const location = useLocation();
  const { color: selectedColor, size: selectedSize } = queryString.parse(
    location.search
  );
  const productsInSameFamily = getProductFamily(familyId, products);

  const colorOptions = productsInSameFamily.map((product) => {
    return product.color;
  });

  //Product that will show
  const productInPage =
    getProductByColor(selectedColor, productsInSameFamily) ||
    productsInSameFamily[0];

  const {
    id,
    name,
    color,
    price,
    sizes: sizesInventory,
    category: categoryId,
    department: departmentId,
    image,
  } = productInPage;

  const category = getDepartmentById(categories, categoryId, "subcategories");
  const department = getDepartmentById(
    categories,
    departmentId,
    "subcategories"
  );

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

  const isButtonDisabled =
    !(selectedColor && selectedSize) || sizesInventory[selectedSize] <= 0;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mb-5 mt-4 d-flex d-md-block justify-content-center">
            <Breadcrumbs links={links} />
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div style={{ maxWidth: 500 }}>
              <img src={resolveHost(image)} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-12 mt-3">
            <div style={{ maxWidth: 500 }}>
              <p className="fs-2 fw-bold">
                {name} - {color}
              </p>
              <p className="lead">${price}</p>
              <div className="mt-5">
                <ProductColorPicker colorOptions={colorOptions} />
              </div>
              <div className="mt-4">
                <ProductSizePicker sizesInventory={sizesInventory} />
              </div>
              <div className="d-flex justify-content-end">
                {sizesInventory && <SizeGuide />}
              </div>

              <ProductInventoryAlert
                selectedSize={selectedSize}
                sizesInventory={sizesInventory}
              />

              <div className="d-flex mt-5">
                <select
                  style={{ maxWidth: 70 }}
                  className="form-select"
                  aria-label="1"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((number) => {
                    return (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    );
                  })}
                </select>

                <button
                  onClick={() => {
                    addProduct({
                      name,
                      id: familyId,
                      image,
                      selectedColor,
                      selectedSize,
                      price,
                      amount,
                    });
                    const cartBtn = document.getElementById("cart-panel");
                    cartBtn.click();
                  }}
                  disabled={isButtonDisabled}
                  className="btn btn-primary w-100 ms-2 py-3  fw-bold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

export default connect(null, mapDispatchToProps)(Product);
