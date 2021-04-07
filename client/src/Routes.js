import React from "react";
import { Route, Switch } from "react-router-dom";

import AllLinks from "./pages/AllLinks/AllLinks";
import { Error404 } from "./pages/Error404/Error404";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/links" component={AllLinks} />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

export default Routes;
