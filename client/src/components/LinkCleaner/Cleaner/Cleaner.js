import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { postLink } from "../../../actions/links";

import styles from "./Cleaner.module.css";

const MyCheckbox = withStyles({
  root: {
    color: "#444444",
    "&$checked": {
      color: "#6C63FF",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Cleaner = () => {
  const [checked, setChecked] = useState(false);
  const [submitCheck, setSubmitCheck] = useState(false);
  const [typedLink, setTypedLink] = useState("");
  const [cleanLink, setCleanLink] = useState({ link: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    setTypedLink("");
    if (submitCheck) {
      dispatch(postLink(cleanLink));
    }
  }, [cleanLink, submitCheck, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedLink = typedLink.replace(/[^aA-zZ0-9./:-_]+/g, "");
    setCleanLink({ link: cleanedLink });
    if (checked) {
      setSubmitCheck(true);
    }
  };

  return (
    <div className={styles["cleaner-container"]}>
      <h1>Link Temizleyici</h1>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Bir Link Yaz..."
          value={typedLink}
          onChange={(e) => setTypedLink(e.target.value)}
          size="50"
        />
        <FormControlLabel
          className={styles["MuiFormControlLabel-label"]}
          control={
            <MyCheckbox
              checked={checked}
              onClick={(e) => setChecked(e.target.checked)}
            />
          }
          label="Linki veritabanına kaydet"
        />
        <p className={styles.note}>Not: Link veritabanında varsa kaydedilmez</p>
        <button className={`${styles.btn} btn`} type="submit">
          Temizle
        </button>
      </form>
      <a
        href={cleanLink.link || " "}
        target="_blank"
        rel="noreferrer"
        className={[styles["link-container"], "link-container"].join(" ")}
      >
        <p className="link">{cleanLink.link.slice(0, 35) || " "}</p>
      </a>
    </div>
  );
};

export default Cleaner;
