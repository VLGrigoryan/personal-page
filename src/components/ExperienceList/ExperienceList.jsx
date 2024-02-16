import React from "react";
import styles from "./ExperienceList.module.css";

const ExperienceList = ({ experience }) => {
  return (
    <div className={styles.sectionExperience}>
      <h2 className={styles.listHeading}>ОПЫТ РАБОТЫ</h2>
      <ul className={`${styles.list} ${styles.jobList}`}>
        {experience.map((job, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${styles.jobListItem}`}
          >
            <h3 className={styles.heading}>{job.title}</h3>
            <div className={styles.jobInfo}>
              <span className={`${styles.companyName} ${styles.text}`}>
                {job.company}&nbsp;/&nbsp;{job.place}
              </span>
              <span className={`${styles.date} ${styles.text}`}>
                &nbsp; {job.date}
              </span>
            </div>
            <div className={styles.descriptionText}>
              <p className={styles.description}>{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
