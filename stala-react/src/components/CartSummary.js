import { Link } from "react-router-dom";

function CartSummary({ showCheckOut, itemCount, subtotal }) {
  return (
    <div
      className="mt-auto letter-spacing-1 "
      style={{
        bottom: 0,
        position: showCheckOut ? "sticky" : "unset",
        background: "inherit",
      }}
    >
      <hr className="mt-0" />
      <div className="d-flex justify-content-between align-items-center ">
        <span className="mt-1 mb-2">
          Subtotal <span className="mx-2 text-muted">{itemCount} Items</span>
        </span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Link className="btn btn-primary btn-lg border w-100 my-2" to="/cart">
        <span className="fs-6">Checkout</span>
      </Link>
      <div className="text-center mt-2">
        <small className="text-secondary">Taxes Calculated at Checkout</small>
      </div>
    </div>
  );
}

export default CartSummary;
