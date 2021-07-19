import { Link } from "react-router-dom";

function CartItem({
  id,
  image,
  name,
  selectedColor: color,
  selectedSize: size,
  price,
  amount,
}) {
  return (
    <div className="card border-0 bg-transparent mb-3">
      <div className="d-flex flex-wrap g-0">
        <div className="col-5 col-md-3">
          <Link
            to={`/shop/product/${id}?color=${color.toLowerCase()}&size=${size.toLowerCase()}`}
          >
            <img
              src={image}
              className="img-fluid"
              style={{ maxHeight: 150 }}
              alt={name}
            />
          </Link>
        </div>

        <div className="col-7 col-md-9">
          <div className="ps-3 d-flex align-items-start flex-column h-100 letter-spacing-1">
            <div className="card-title mt-1 d-flex justify-content-between w-100 ">
              <Link
                style={{ color: "inherit" }}
                className="text-decoration-none "
                to={`/shop/product/${id}?color=${color.toLowerCase()}&size=${size.toLowerCase()}`}
              >
                {name}
              </Link>
              <span className="mt-2 fw-light">${price}</span>
            </div>
            <div
              className=" text-secondary fw-light"
              style={{ fontSize: "0.9rem", width: 150, maxWidth: 150 }}
            >
              <span className="text-capitalize">{color}</span>
              <span className="mx-2">|</span>
              <span className="text-uppercase">{size}</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-auto w-100 mb-2 ">
              <select
                style={{
                  maxWidth: 60,
                  color: "inherit",
                  backgroundColor: "transparent",
                }}
                className="form-select"
                aria-label="1"
                value={amount}
              >
                {[1, 2, 3, 4, 5, 6].map((number) => {
                  return (
                    <option className="text-dark" key={number} value={number}>
                      {number}
                    </option>
                  );
                })}
              </select>
              <button className="btn btn-sm btn-outline-secondary border-0 px-1 p-0 fw-light">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
