import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavUtilities from "./NavUtilities";
import SearchPanel from "./SearchPanel";
// OnScroll Up -> Show Nav Bar and push so other sticky elements remian visible

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top w-100 "
      style={{ zIndex: 10000 }}
    >
      <div className="container font-smaller-lg">
        <div className="col-4">
          <div className="d-flex align-items-center">
            <NavLinks />
            <div className="d-block d-md-none">
              <SearchPanel />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <NavLogo />
        </div>
        <div className="col-4">
          <NavUtilities />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
