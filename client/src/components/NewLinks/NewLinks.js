import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

import NewLink from "./NewLink/NewLink";

import styles from "./NewLinks.module.css";

const NewLinks = () => {
  const links = useSelector((state) => state.newLinks);

  return (
    <div className={styles["new-links-wrapper"]}>
      <div className={styles.title}>
        <h1>Son Linkler</h1>
      </div>
      <div className={styles["new-links"]}>
        {!links.length ? (
          <div className={styles.progress}>
            <CircularProgress
              className={styles["MuiCircularProgress-colorPrimary"]}
            />
          </div>
        ) : (
          links.map((link) => <NewLink key={link._id} link={link} />)
        )}
      </div>
      <Link to="/links" className={`${styles.btn} btn`}>
        Tüm Linkler
      </Link>
    </div>
  );
};

export default NewLinks;
