import Cart from "./Cart";
import SidePanel from "./SidePanel";
function CartPanel() {
  return (
    <SidePanel
      dropdownId="cart-panel"
      darkMode={false}
      panelTitle={
        <span className="fs-5 fw-bold d-flex justify-content-center ">
          My Cart
        </span>
      }
      title={
        <>
          <i className="bi bi-cart"></i>
          <span className="visually-hidden">My Cart</span>
        </>
      }
    >
      <div className="px-3 py-4" style={{ maxWidth: 500 }}>
        <Cart />
      </div>
    </SidePanel>
  );
}

export default CartPanel;
