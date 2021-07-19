import Cart from "./Cart";
import SidePanel from "./SidePanel";
function CartPanel() {
  return (
    <SidePanel
      sidePanelId="cart-panel"
      darkMode={false}
      preferredWidth={600}
      panelTitle={
        <div className="fs-6 letter-spacing-2 h-100 align-items-center text-uppercase d-flex justify-content-center">
          <span>My Cart</span>
        </div>
      }
      title={
        <>
          <i className="bi bi-cart"></i>
          <span className="visually-hidden">My Cart</span>
        </>
      }
    >
      <div
        className="px-3 py-4"
        style={{
          maxWidth: 700,
          minHeight: "calc( 100vh - 80px)",
          background: "inherit",
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 500, background: "inherit" }}
        >
          <Cart showCheckOut={true} />
        </div>
      </div>
    </SidePanel>
  );
}

export default CartPanel;
