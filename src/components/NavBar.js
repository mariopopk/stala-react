import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavUtilities from "./NavUtilities";
// OnScroll Up -> Show Nav Bar and push so other sticky elements remian visible

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  w-100  border-bottom "
      style={{ zIndex: 10000 }}
    >
      <div className="container">
        <div className="col-4">
          <NavLinks />
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
