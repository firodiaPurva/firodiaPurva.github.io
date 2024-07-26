import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Purva</h2>
        <p className={styles.description}>
        I'm a passionate Data Scientist and Developer currently pursuing my Master's in Data Science.
        </p>
        <a href="https://drive.google.com/file/d/1KTok6_TY-EdDe63BxGzV33Ta8OyoUivW/view?usp=sharing" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
        Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
