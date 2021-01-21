import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { getLinks } from "../../actions/links";
import NewLink from "../NewLinks/NewLink/NewLink";

import styles from "./AllLinks.module.css";

const AllLinks = () => {
  const allLinks = useSelector((state) => state.allLinks);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const observer = useRef();

  const getNewLinks = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(getLinks(allLinks.currentPage + 1));
      setIsLoading(false);
    }, 1500);
  }, [allLinks.currentPage, dispatch]);

  const lastLink = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && allLinks.hasMore) {
          getNewLinks();
        }
      });
      if (node) observer.current.observe(node);
    },
    [allLinks.hasMore, getNewLinks]
  );

  return (
    <div className={styles.container}>
      <div className={styles["container-wrapper"]}>
        <Link to="/" className={`${styles.btn} btn`}>
          Ana Sayfa
        </Link>
        <div className={styles["link-container"]}>
          {allLinks.links?.map((link, index) => {
            if (allLinks.links.length === index + 1) {
              return (
                <div ref={lastLink} key={link._id} className={styles.link}>
                  <NewLink link={link} />
                </div>
              );
            } else {
              return (
                <div key={link._id} className={styles.link}>
                  <NewLink link={link} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.status}>
        {isLoading && allLinks.hasMore ? (
          <CircularProgress
            className={styles["MuiCircularProgress-colorPrimary"]}
          />
        ) : null}
        {!allLinks.hasMore && <p className={styles["status-text"]}>Son</p>}
      </div>
    </div>
  );
};

export default AllLinks;
