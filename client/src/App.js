import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getLinks } from "./actions/links";
import LinkCleaner from "./components/LinkCleaner/LinkCleaner";
import Column from "./components/Column/Column";
import NewLinks from "./components/NewLinks/NewLinks";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  return (
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
  );
}

export default App;
