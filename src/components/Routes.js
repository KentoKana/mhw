import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";

import Home from "../components/pages/Home";
import List from "../components/pages/List";
import SingleItem from "../components/pages/SingleItem";
import _404 from "../components/pages/404";

const Routes = () => {
  return (
    <>
      <ScrollToTop />
      <header>
        <nav>Navigation</nav>
      </header>
      <main role="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list/:listType" component={List} />
          <Route
            exact
            path="/list/:listType/:itemName/:id"
            component={SingleItem}
          />
          <Route path="*" component={_404} />
        </Switch>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default withRouter(Routes);
