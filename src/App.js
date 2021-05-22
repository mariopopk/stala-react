import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./views/404";
import Home from "./views/Home";
import Page from "./views/Page";
import Shop from "./views/Shop";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/site/:slug">
          <Page />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
