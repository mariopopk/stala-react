import CartComponent from "../components/Cart";

function Cart() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap mt-5">
        <div className="col-md-6 col-12">
          <div className="me-auto bg-white p-3" style={{ maxWidth: 650 }}>
            <div className="fs-1 letter-spacing-1 border-bottom pb-2  mb-3">
              My Cart
            </div>
            <CartComponent />
          </div>
        </div>

        <div className="col-md-6 col-12">
          <div className="ms-auto" style={{ maxWidth: 450 }}>
            <div className="fs-4  mb-5 mx-3 ">Order Summary</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
