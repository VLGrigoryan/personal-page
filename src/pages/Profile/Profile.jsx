import React from "react";
import InfoList from "../../components/InfoList/InfoList";
import SkillsList from "../../components/SkillsList/SkillsList";
import EducationList from "../../components/EducationList/EducationList";
import ExperienceList from "../../components/ExperienceList/ExperienceList";
import styles from "./Profile.module.css";

const ProfilePage = ({ data }) => {
  const { info,  experience, education, skills } = data.user;

  return (
    <div className="body">
      <section id="page" className={styles.page}>
        <InfoList user={info} />
        <section id="page" className={styles.sectionMainInfo}>
          <div className={styles.sectionMainInfo}>
            <div className={styles.personalInfo}>
              <h1 className={styles.name}>{info.name}</h1>
              <h2 className={styles.titleName}>{info.specialization}</h2>
            </div>
          </div>
          <ExperienceList experience={experience} />
          <EducationList education={education} />
          <SkillsList skills={skills} />
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
