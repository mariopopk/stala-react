import { Link } from "react-router-dom";

function Alert({ children }) {
  return (
    <div
      className="alert text-white bg-primary text-center py-1 m-0"
      role="alert"
    >
      <small>{children}</small>{" "}
      <Link className="link-light ms-3" to="/">
        <small> See Details</small>
      </Link>
    </div>
  );
}

export default Alert;
