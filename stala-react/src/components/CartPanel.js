import Cart from "./Cart";
import SidePanel from "./SidePanel";
function CartPanel() {
  return (
    <SidePanel
      dropdownId="cart-panel"
      title={
        <>
          <i className="bi bi-cart"></i>
          <span className="visually-hidden">My Cart</span>
        </>
      }
    >
      <div className="px-5 py-4">
        <Cart />
      </div>
    </SidePanel>
  );
}

export default CartPanel;
