import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./views/404";
import Home from "./views/Home";
import Page from "./views/Page";
import Shop from "./views/Shop";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import ShopCategories from "./views/ShopCategories";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import LoginAndSignUp from "./views/LoginAndSignUp";
import Product from "./views/Product";

function App({ currentUser }) {
  return (
    <div className="">
      <Alert>
        30% off online only <span className="mx-2">|</span> Free shipping on 2+
        Items <span className="mx-2">|</span> Extra 40% off sale
      </Alert>
      <NavBar />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/shop/:category" children={<Shop />} />
        <Route
          exact
          path="/shop/:category/categories"
          children={<ShopCategories />}
        />
        <Route path="/site/:slug" children={<Page />} />

        <Route
          path="/login"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <LoginAndSignUp />;
          }}
        />
        <Route path="/shop/product/:slug" children={<Product />} />
        <Route path="*" children={<NotFound />} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(App);
