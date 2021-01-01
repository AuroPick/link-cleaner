import React from "react";

import Cleaner from "./Cleaner/Cleaner";
import Hero from "./Hero/Hero";

import styles from "./LinkCleaner.module.css";

const LinkCleaner = () => {
  return (
    <div className={styles["link-cleaner-container"]}>
      <Cleaner />
      <Hero />
    </div>
  );
};

export default LinkCleaner;
