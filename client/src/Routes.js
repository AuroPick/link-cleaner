import React from "react";
import { Route, Switch } from "react-router-dom";

import AllLinks from "./components/AllLinks/AllLinks";
import Home from "./pages/Home";
import Sitemap from "./Sitemap";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} sitemapIndex={true} priority="1" />
      <Route exact path="/links" component={AllLinks} sitemapIndex={true} />
      <Route exact path="/sitemap" component={Sitemap} sitemapIndex={true} />
      <Route path="*" component={Home} sitemapIndex={true} />
    </Switch>
  );
};

export default Routes;
