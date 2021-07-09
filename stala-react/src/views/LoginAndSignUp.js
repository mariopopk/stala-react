import { connect } from "react-redux";
import Jumbotron from "../components/Jumbotron";
import SignInForm from "../components/SignInForm";
import Tabs from "../components/Tabs";
import { setCurrentUser } from "../redux/user/user.actions";

function LoginAndSignUp({ currentUser, setCurrentUser }) {
  // const handleLogin = () => {
  //   setCurrentUser({
  //     id: 1,
  //     username: "mpopoca",
  //     firstName: "Mario",
  //     lastName: "Popoca",
  //   });
  // };

  // handleLogin();

  const tabs = [
    {
      title: "Sign In",
      key: "sign-in",
      content: <SignInForm />,
    },

    { title: "Create Account", key: "account-creation", content: "" },
  ];

  return (
    <>
      <Jumbotron
        height={300}
        className="text-white"
        title={<h1 className="text-center">Stala</h1>}
        image={{
          url: "/uploads/store_6901d7dacd.jpg",
          opacity: "0.3",
          position: "50% 50%",
        }}
      />
      <div className="container">
        <div className="my-5 mx-auto " style={{ maxWidth: 600 }}>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginAndSignUp);

// <div className="row">
// <div className="col-12 col-md-6"></div>

// <div className="col-12 col-md-6">
//   <form style={{ maxWidth: 300 }}>
//     <h3 className="mt-5 mb-3">Login</h3>

//     <div className="mb-3">
//       <label htmlFor={emailLabel} className="form-label">
//         Email address
//       </label>
//       <input type="email" className="form-control" id={emailLabel} />
//     </div>
//     <div className="mb-3">
//       <label htmlFor={passwordLabel} className="form-label">
//         Password
//       </label>
//       <input
//         type="password"
//         className="form-control"
//         id={passwordLabel}
//       />
//     </div>

//     <button type="submit" className="btn btn-primary mt-3">
//       Submit
//     </button>
//   </form>
// </div>
// </div>
