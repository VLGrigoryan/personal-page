import React from "react";
import styles from "./SkillsList.module.css";

const SkillsList = ({ skills }) => {
   return (
    <div className={`${styles.section} ${styles.sectionSkills}`}>
      <h2 className={styles.listHeading}>НАВЫКИ</h2>
      <ul
        className={`${styles.section} ${styles.sectionSkills} ${styles.list} ${styles.skills}`}
      >
        {skills.map((skill, index) => (
          <li key={index} className={`${styles.listItem} ${styles.skills}`}>
            <span style={{ backgroundImage: `src(${skill.icon})` }}>
              <img className={styles.icon} src={skill.icon} alt={skill.name} />
            </span>
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
