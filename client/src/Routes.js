import React from "react";
import { Route, Switch } from "react-router-dom";

import AllLinks from "./pages/AllLinks/AllLinks";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/links" component={AllLinks} />
      <Route path="*" component={Home} />
    </Switch>
  );
};

export default Routes;
