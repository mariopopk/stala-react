import CartComponent from "../components/Cart";

function Cart() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap mt-5">
        <div className="col-md-6 col-12">
          <div style={{ maxWidth: 450 }}>
            <div className="fs-4  mb-5 mx-3 ">My Cart</div>
            <CartComponent />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="card ms-auto" style={{ maxWidth: 450 }}>
            Hello
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
