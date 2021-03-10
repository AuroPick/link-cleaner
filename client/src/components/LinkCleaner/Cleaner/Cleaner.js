import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import tld from "tld-list";

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
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTypedLink("");
    if (submitCheck) {
      dispatch(postLink(cleanLink));
      setSubmitCheck(false);
      setChecked(false);
    }
  }, [cleanLink, submitCheck, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let cleanedLink = typedLink.replace(
      /( |\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,
      ""
    );

    tld.some((domain) => {
      let check = false;
      if (cleanedLink.toLowerCase().includes(`.${domain}`)) {
        check = true;

        if (
          cleanedLink.toLowerCase().startsWith("http://") ||
          cleanedLink.toLowerCase().startsWith("https://")
        ) {
        } else {
          cleanedLink = cleanedLink.replace(/^/, "https://");
        }

        setCleanLink({ link: cleanedLink });
        setMessage(() => null);
        if (checked) {
          setSubmitCheck(true);
        }
      } else {
        setMessage(
          () =>
            ["Link geçerli bir domain değil. Lütfen ", <strong>.com</strong>, " gibi bir top level domain içerdiğinden emin olun."]
        );
      }
      return check;
    });
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
          required={true}
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
        <p className={styles.note}>
          Not: Link veritabanında varsa veya .com gibi uzantı içermiyorsa
          kaydedilmez
        </p>
        <button className={`${styles.btn} btn`} type="submit">
          Temizle
        </button>
      </form>
      <a
        href={cleanLink.link || " "}
        target="_blank"
        rel="noopener noreferrer"
        className={[styles["link-container"], "link-container"].join(" ")}
      >
        <p className="link">
          {cleanLink.link ? cleanLink.link.slice(0, 35) : " "}
        </p>
      </a>
      {message && (
        <Alert className={styles.alert} severity="error" onClose={() => setMessage(null)}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Cleaner;
