import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavUtilities from "./NavUtilities";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  w-100">
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
