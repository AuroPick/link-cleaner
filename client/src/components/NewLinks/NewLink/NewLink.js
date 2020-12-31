import React from "react";
import TimeAgo from "react-timeago";
import turkishStrings from "react-timeago/lib/language-strings/tr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

import styles from "./NewLink.module.css";

const formatter = buildFormatter(turkishStrings);

const NewLink = ({ link }) => {

  return (
    <a
      href={link.link}
      target="_blank"
      rel="noreferrer"
      className={styles["link-container"]}
    >
      <p className={styles.link}>{link.link}</p>
      <p className={styles["time-ago"]}>
        <TimeAgo date={link.createdAt} formatter={formatter} />
      </p>
    </a>
  );
};

export default NewLink;