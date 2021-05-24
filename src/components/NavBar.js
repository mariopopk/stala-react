import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import NavUtilities from "./NavUtilities";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100">
      <div className="container">
        <div className="col-4">
          <NavLinks />
        </div>
        <div className="col-4 ">
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
