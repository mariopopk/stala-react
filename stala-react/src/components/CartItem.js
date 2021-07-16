import { Link } from "react-router-dom";

function CartItem({ id, image, name, color, size, price, amount }) {
  return (
    <div className="card border-0 bg-transparent mb-3">
      <div className="d-flex flex-wrap g-0">
        <div className="col-4">
          <Link
            to={`/shop/product/${id}?color=${color.toLowerCase()}&size=${size.toLowerCase()}`}
          >
            <img src={image} className="img-fluid " alt={name} />
          </Link>
        </div>

        <div className="col-8 ">
          <div className="ps-3 d-flex align-items-start flex-column h-100">
            <div className="card-title mt-1 fw-bold d-flex justify-content-between w-100">
              <Link
                to={`/shop/product/${id}?color=${color.toLowerCase()}&size=${size.toLowerCase()}`}
              >
                {name}
              </Link>
              <button className="btn btn-outline-secondary border-0 px-1 p-0">
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
            <div
              className="my-2"
              style={{ fontSize: "0.9rem", width: 150, maxWidth: 150 }}
            >
              <div className="d-flex justify-content-between">
                Color: <span>{color}</span>
              </div>
              <div className="d-flex justify-content-between">
                Size: <span>{size}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-auto w-100 mb-2">
              <select
                style={{ maxWidth: 60 }}
                className="form-select bg-white"
                aria-label="1"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
              <span className="fw-bold ">${price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;