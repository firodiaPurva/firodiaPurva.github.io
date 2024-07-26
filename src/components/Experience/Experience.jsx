import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.experienceList}>
          {history.map((historyItem, index) => (
            <li key={index} className={styles.experienceItem}>
              <h3 className={styles.role}>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p className={styles.period}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul className={styles.detailsList}>
                {historyItem.experiences.map((experience, i) => (
                  <li key={i} className={styles.detail}>{experience}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
