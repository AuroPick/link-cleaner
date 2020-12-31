import React from "react";
import { useSelector } from "react-redux";

import NewLink from "./NewLink/NewLink";

import styles from "./NewLinks.module.css";

const NewLinks = () => {
  const links = useSelector((state) => state.links);

  return (
    <div className={styles["new-links-wrapper"]}>
      <div className={styles.title}>
        <h1>Son Linkler</h1>
      </div>
      <div className={styles["new-links"]}>
        {links.map((link) => (
          <NewLink key={link._id} link={link} />
        ))}
      </div>
    </div>
  );
};

export default NewLinks;
