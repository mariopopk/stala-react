import NavUser from "./NavUser";
import Search from "./Search";
import Cart from "./Cart";
import SidePanel from "./SidePanel";
function NavUtilities() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <SidePanel
        dropdownId="search-panel"
        title={
          <>
            <i className="bi bi-search"></i>
            <span className="visually-hidden">Search Products</span>
          </>
        }
      >
        <div className="px-5 py-4">
          <Search />
        </div>
      </SidePanel>

      <div className="d-none d-md-block">
        <NavUser />
      </div>

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
    </div>
  );
}

export default NavUtilities;
