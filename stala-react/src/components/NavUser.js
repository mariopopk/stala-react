import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../redux/user/user.actions";
import Dropdown from "./Dropdown";

function NavUser({ currentUser, setCurrentUser }) {
  return (
    <>
      <Dropdown
        dropdownId="account-dropdown"
        title={
          <span>
            <i className="bi bi-person lead"></i>
            <span className="visually-hidden">My Account</span>
          </span>
        }
      >
        {currentUser ? (
          <>
            <Link className="dropdown-item " to="/">
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </Link>

            <button
              onClick={() => {
                setCurrentUser(null);
              }}
              className="dropdown-item "
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className="dropdown-item " to="/login">
              Sign In | Create Account
            </Link>

            <Link className="dropdown-item " to="/">
              Track Order
            </Link>
          </>
        )}
      </Dropdown>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavUser);
