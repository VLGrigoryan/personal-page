import React from "react";
import styles from "./EducationList.module.css";

const EducationList = ({ education }) => {
  return (
    <div className={styles.sectionEducation}>
      <h2 className={styles.listHeading}>ОБРАЗОВАНИЕ</h2>
      <ul className={`${styles.list} ${styles.educationList}`}>
        {education.map((edu, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${styles.educationListItem}`}
          >
            <h3 className={styles.educationHeading}>{edu.degree}</h3>
            <div className={styles.educationInfo}>
              <span className={`${styles.placeName} ${styles.educationText}`}>
                {edu.institution}&nbsp;/&nbsp;{edu.place}
              </span>
              <span className={`${styles.date} ${styles.educationText}`}>
                &nbsp;/&nbsp;{edu.date}
              </span>
            </div>
            <div className={styles.educationDescriptionText}>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationList;
