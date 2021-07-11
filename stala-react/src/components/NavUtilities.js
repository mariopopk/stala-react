import CartPanel from "./CartPanel";
import NavUser from "./NavUser";

import SearchPanel from "./SearchPanel";
function NavUtilities() {
  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="d-none d-md-block">
        <SearchPanel />
      </div>
      <NavUser />
      <CartPanel />
    </div>
  );
}

export default NavUtilities;
