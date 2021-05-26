import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function NavUser({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = "userMenuButton";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleClick}
          className="bg-transparent w-100 h-100 position-fixed"
          style={{ top: 0, bottom: 0, right: 0 }}
        ></div>
      )}

      <div className="dropdown">
        <button
          className="btn text-dark "
          type="button"
          id={buttonId}
          data-bs-toggle="dropdown"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <i className="bi bi-person lead"></i>
        </button>
        <ul
          className="dropdown-menu border-0 dropdown-menu-dark "
          aria-labelledby={buttonId}
          style={{ display: isOpen ? "block" : "none", right: 0 }}
        >
          {currentUser ? (
            <>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="dropdown-item "
                  to="/"
                >
                  {`${currentUser.firstName} ${currentUser.lastName}`}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="dropdown-item "
                  to="/logout"
                >
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="dropdown-item "
                  to="/"
                >
                  Sign In | Create Account
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="dropdown-item "
                  to="/"
                >
                  Track Order
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(NavUser);
