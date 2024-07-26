import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImagesmall.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItems}>
          <p>
            Hi, my name is Purva Firodia. I am a student currently pursuing my
            Master of Science in Data Science at the{" "}
            <a href="https://www.colorado.edu/">University of Colorado Boulder</a>.
          </p>
          <p>
            I am passionate about leveraging data-driven approaches to solve
            real-world problems. My interests lie in applying machine learning,
            deep learning, and data visualization techniques to uncover insights
            and drive decision-making.
          </p>
          <p>
            My goal is to combine my technical skills with creative problem-solving
            to make meaningful contributions in the field of data science. I am learning more about advanced machine learning algorithms and deep learning techniques.
            I am looking to collaborate on data-driven projects and innovative tech solutions.
          </p>
        </div>
      </div>

      <h2 className={styles.skillsTitle}>Skills</h2>
      <div className={styles.skillsHoverContainer}>
        <div className={styles.skillsCategory}>
          <h3 className={styles.skillsCategoryTitle}>Programming</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillsItem}>Python</div>
            <div className={styles.skillsItem}>R</div>
            <div className={styles.skillsItem}>SQL</div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3 className={styles.skillsCategoryTitle}>Concepts</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillsItem}>Statistical Analysis</div>
            <div className={styles.skillsItem}>Data Mining</div>
            <div className={styles.skillsItem}>Machine Learning</div>
            <div className={styles.skillsItem}>Deep Learning</div>
            <div className={styles.skillsItem}>Data Science</div>
            <div className={styles.skillsItem}>Scikit-learn</div>
            <div className={styles.skillsItem}>Pandas</div>
            <div className={styles.skillsItem}>TensorFlow</div>
            <div className={styles.skillsItem}>Keras</div>
            <div className={styles.skillsItem}>Information Visualization</div>
            <div className={styles.skillsItem}>Matplotlib</div>
            <div className={styles.skillsItem}>Seaborn</div>
            <div className={styles.skillsItem}>Data Visualization</div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3 className={styles.skillsCategoryTitle}>Data Visualization</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillsItem}>Tableau</div>
            <div className={styles.skillsItem}>Power BI</div>
            <div className={styles.skillsItem}>Excel</div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3 className={styles.skillsCategoryTitle}>Technologies and Databases</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillsItem}>Git</div>
            <div className={styles.skillsItem}>GitHub</div>
            <div className={styles.skillsItem}>Postman</div>
            <div className={styles.skillsItem}>Linux</div>
            <div className={styles.skillsItem}>AWS (Amazon Web Services)</div>
            <div className={styles.skillsItem}>MongoDB</div>
            <div className={styles.skillsItem}>MySQL</div>
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3 className={styles.skillsCategoryTitle}>IDEs</h3>
          <div className={styles.skillsList}>
            <div className={styles.skillsItem}>Jupyter Notebook</div>
            <div className={styles.skillsItem}>R Studio</div>
            <div className={styles.skillsItem}>VS Code</div>
          </div>
        </div>
      </div>
    </section>
  );
};
