import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

  return (
    <div className={styles["cleaner-container"]}>
      <h1>Link Temizleyici</h1>
      <form className={styles["form-container"]}>
        <input
          className={styles.input}
          type="text"
          placeholder="Bir Link Yaz..."
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
        <button className={[styles.btn, "btn"].join(" ")}>Temizle</button>
      </form>
      <a
        href="https://www.google.com.tr/"
        target="_blank"
        rel="noreferrer"
        className={[styles["link-container"], "link-container"].join(" ")}
      >
        <p className="link">
          {"https://www.google.com.traaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".slice(
            0,
            30
          )}
        </p>
      </a>
    </div>
  );
};

export default Cleaner;
