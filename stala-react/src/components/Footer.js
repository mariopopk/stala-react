import NavLogo from "./NavLogo";

function Footer() {
  return (
    <footer className="bg-light  " style={{ marginTop: "5rem" }}>
      <div className="container px-2 py-5 d-flex flex-wrap">
        <div className="col-6 col-md-3 align-items-center d-flex">
          <NavLogo />
        </div>
        <div className="col-6 col-md-3">
          <h6>Customer</h6>
          <ul className="list-unstyled">
            <li>Returns</li>
            <li>FAQs</li>
            <li>Order Status</li>
            <li>Shipping</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
