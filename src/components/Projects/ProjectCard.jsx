import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, source },
}) => {
  return (
    <a href={source} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
      </div>
    </a>
  );
};
