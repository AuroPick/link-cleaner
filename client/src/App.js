import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getNewLinks, getLinks } from "./actions/links";
import LinkCleaner from "./components/LinkCleaner/LinkCleaner";
import Column from "./components/Column/Column";
import NewLinks from "./components/NewLinks/NewLinks";
import AllLinks from "./components/AllLinks/AllLinks";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewLinks());
    dispatch(getLinks(0));
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <div className={styles["link-cleaner-container"]}>
              <LinkCleaner />
            </div>
            <div className={styles.column}>
              <Column />
            </div>
            <div className={styles["new-links-container"]}>
              <NewLinks />
            </div>
          </div>
        </Route>
        <Route exact path="/links">
          <AllLinks />
        </Route>
        <Route path="*">
          <div className={styles.container}>
            <div className={styles["link-cleaner-container"]}>
              <LinkCleaner />
            </div>
            <div className={styles.column}>
              <Column />
            </div>
            <div className={styles["new-links-container"]}>
              <NewLinks />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
