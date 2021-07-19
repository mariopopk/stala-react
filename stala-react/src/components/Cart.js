import CartItem from "./CartItem";
import { connect } from "react-redux";
import CartSummary from "./CartSummary";

function Cart({ products, showCheckOut = false }) {
  let items = [];
  let hashItems = {};
  let subtotal = 0;
  let itemCount = 0;

  // Group amounts
  products.forEach((product) => {
    const key = `${product.id}-${product.selectedSize}-${product.selectedColor}`;
    if (hashItems[key]) {
      const existingAmount = Number(hashItems[key].amount);
      const additionalAmount = Number(product.amount);
      hashItems[key] = {
        ...product,
        amount: additionalAmount + existingAmount,
      };
    } else {
      const existingAmount = Number(product.amount);

      hashItems[key] = { ...product, amount: existingAmount };
    }

    if (hashItems[key].amount > 6) hashItems[key] = { ...product, amount: 6 };
  });

  for (let key in hashItems) {
    const product = hashItems[key];
    itemCount += product.amount;
    subtotal += product.amount * product.price;

    items.push({ ...product, id: key });
  }

  if (items.length < 1)
    return <div className="text-center">You have no items in your cart.</div>;

  return (
    <div
      style={{
        minHeight: showCheckOut ? "calc( 100vh - 128px )" : "auto",
        background: "inherit",
      }}
      className="d-flex flex-column justify-content-start mx-auto"
    >
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      {showCheckOut && (
        <CartSummary
          subtotal={subtotal}
          itemCount={itemCount}
          showCheckOut={showCheckOut}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default connect(mapStateToProps)(Cart);
