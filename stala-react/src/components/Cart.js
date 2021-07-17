import CartItem from "./CartItem";
import { connect } from "react-redux";

function Cart({ products }) {
  console.log("products", products);
  let items = [];
  let hashItems = {};

  // Group amounts
  products.forEach((product) => {
    const key = `${product.id}-${product.selectedSize}`;
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
    items.push(product);
  }

  console.log("items", items);

  if (items.length < 1)
    return <div className="text-center">You have no items in your cart.</div>;

  return (
    <div>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
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
