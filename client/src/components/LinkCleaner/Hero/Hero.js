import React from "react";
import { Facebook, Instagram, GitHub } from "@material-ui/icons"

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-inside-container"]}>
        <img src={process.env.PUBLIC_URL + "/img/hero.png"} alt="hero" />
        <p className={styles.text}>Aykut Saki</p>
        <div className={styles["social-links"]}>
          <a
            href="https://www.facebook.com/Zaalow/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook color="primary" className={styles["social-svg"]} />
          </a>
          <a
            href="https://www.instagram.com/aykut_saki/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram color="primary" className={styles["social-svg"]} />
          </a>
        </div>
      </div>
      <div className={styles.github}>
        <p className={styles["github-text"]}>
          Meraklısına kodlar! Bir yıldızı çok görmeyin.
        </p>
        <a
          href="https://github.com/AuroPick/link-cleaner"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub color="primary" className={styles["social-svg"]} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
