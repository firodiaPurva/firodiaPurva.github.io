import React from "react";
import styles from "./Publications.module.css";
import publications from "../../data/publications.json";

export const Publications = () => {
  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}>Publications</h2>
      <div className={styles.content}>
        <ul className={styles.publicationList}>
          {publications.map((publication, index) => (
            <li key={index} className={styles.publicationItem}>
              <h3 className={styles.publicationTitle}>
                <a href={publication.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {publication.title}
                </a>
              </h3>
              <p className={styles.journal}>{publication.journal}</p>
              <p className={styles.doi}>DOI: {publication.doi}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
