import CartItem from "./CartItem";
function Cart() {
  const cartItems = [
    {
      id: "60e9151bfc13ae5bbf0000f1",
      image:
        "https://calvinklein.scene7.com/is/image/CalvinKlein/21298320_020_main?wid=856&hei=1127&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0",
      name: "Hoodie",
      color: "White",
      size: "XS",
      price: 10.99,
      amount: 1,
    },

    {
      id: "60e9151bfc13ae5bbf0000f0",
      image: "https://oldnavy.gap.com/webcontent/0020/135/445/cn20135445.jpg",
      name: "Khaki Shorts",
      color: "Gray",
      size: "XS",
      price: 22.99,
      amount: 1,
    },
    {
      id: "60e9151bfc13ae5bbf00006b",
      image: "https://oldnavy.gap.com/webcontent/0015/325/094/cn15325094.jpg",
      name: "Cotton Shirt",
      color: "Blue",
      size: "XS",
      price: 7.99,
      amount: 1,
    },
  ];
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Cart;
