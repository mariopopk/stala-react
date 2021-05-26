import { Switch, Route } from "react-router-dom";
import NotFound from "./views/404";
import Home from "./views/Home";
import Page from "./views/Page";
import Shop from "./views/Shop";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import ShopCategories from "./views/ShopCategories";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

function App({ setCurrentUser }) {
  // Setting User
  setCurrentUser({
    id: 1,
    username: "mpopoca",
    firstName: "Mario",
    lastName: "Popoca",
  });
  return (
    <div className="">
      <Alert>
        30% off online only <span className="mx-2">|</span> Free shipping on 2+
        Items <span className="mx-2">|</span> Extra 40% off sale
      </Alert>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop/:category">
          <Shop />
        </Route>
        <Route exact path="/shop/:category/categories">
          <ShopCategories />
        </Route>
        <Route path="/site/:slug">
          <Page />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
