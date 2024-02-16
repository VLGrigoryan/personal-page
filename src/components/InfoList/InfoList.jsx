import React from "react";
import styles from "./InfoList.module.css";
import {data} from "../../data/data"
const InfoList = ({ user }) => {
  return (
    <div className={styles.sectionInfo}>
      <div className={styles.avatarImageContainer}>
        <img className={styles.avatarImage} src={user.avatar} alt={user.name} />
      </div>
      <div className={styles.info}>
        <ul className={`${styles.list} ${styles.infoList}`}>
          <li className={`${styles.listItem} ${styles.infoListItem}`}>
            <span className={styles.icon}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="white">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#575757"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8201 16.4874C19.836 16.5955 19.8244 16.7059 19.7863 16.8083C19.7482 16.9107 19.6849 17.0017 19.6023 17.0729L17.5388 19.0008C17.4344 19.1063 17.3108 19.1908 17.1748 19.2496C16.9443 19.3566 16.6916 19.4064 16.4379 19.395C16.2409 19.395 15.9226 19.3636 15.483 19.3007C15.0435 19.2365 14.5061 19.0807 13.8695 18.8331C13.2343 18.5843 12.513 18.2123 11.7055 17.7159C10.8994 17.2183 10.0411 16.5372 9.13067 15.6702C8.47977 15.0769 7.87779 14.4317 7.33062 13.7409C6.90563 13.2038 6.52191 12.6351 6.18275 12.0396C5.92437 11.5875 5.70654 11.1133 5.53186 10.6225C5.404 10.2656 5.30499 9.89904 5.23577 9.52623C5.17053 9.19203 5.15514 8.84994 5.19011 8.5112C5.23825 8.22058 5.37981 7.95378 5.59317 7.75155L7.65671 5.80792C7.78916 5.67683 7.96771 5.60343 8.15369 5.6036C8.281 5.60141 8.40572 5.63994 8.50978 5.71362C8.61332 5.7866 8.70263 5.87805 8.77327 5.98343L10.4338 8.94995C10.4795 9.02578 10.5099 9.10996 10.5231 9.19763C10.5363 9.28529 10.5321 9.37472 10.5107 9.46075C10.4729 9.64012 10.3809 9.80341 10.2472 9.92832L9.48677 10.6447C9.46252 10.672 9.4443 10.7042 9.43329 10.739C9.41954 10.7742 9.4116 10.8113 9.40981 10.8491C9.45155 11.0534 9.54416 11.2865 9.68895 11.5498C9.81287 11.7842 10.0046 12.0684 10.2629 12.405C10.5212 12.7403 10.889 13.128 11.3651 13.5667C11.8295 14.0147 12.2443 14.3617 12.6056 14.6106C12.9682 14.8594 13.2708 15.0415 13.5134 15.1581C13.756 15.2759 13.9426 15.3467 14.0717 15.3702L14.2661 15.4069C14.3004 15.4045 14.3343 15.397 14.3665 15.3846C14.4033 15.3753 14.4376 15.3579 14.4669 15.3336L15.3513 14.4862C15.5335 14.3319 15.7652 14.249 16.0035 14.253C16.1482 14.2459 16.2924 14.2761 16.4222 14.3408H16.4379L19.4314 16.0054C19.6493 16.1325 19.7784 16.2936 19.8201 16.4874Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span className={styles.iconPhone}>{user.phoneNumber}</span>
          </li>
          <li className={`${styles.listItem} ${styles.infoListItem}`}>
            <span className={styles.icon}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="white">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#575757"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7671 12.5883L19.827 7.87717V17.19L14.7671 12.5883ZM5.50475 7.20234C5.70261 7.00415 5.95975 6.89511 6.22597 6.8965H18.773C19.0541 6.8965 19.3076 7.01154 19.4954 7.20094L12.4988 13.6209L5.50475 7.20234ZM5.17188 17.19V7.87997L10.2305 12.5883L5.17188 17.19ZM12.4988 14.7419L14.312 13.0429L19.4929 17.7989C19.295 17.9959 19.0385 18.1044 18.773 18.1034H6.22597C5.95924 18.1046 5.70149 17.9962 5.50222 17.7989L10.6857 13.0429L12.4988 14.7419Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span className={styles.infoText}>{user.email}</span>
          </li>
          <li className={`${styles.listItem} ${styles.infoListItem}`}>
            <span className={styles.icon}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="white">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#575757"></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4994 3.67657C9.2565 3.67657 6.61768 6.29508 6.61768 9.51377C6.61768 10.8104 7.4513 12.9236 9.16731 15.9752C10.3815 18.1328 11.5754 19.9321 11.6254 20.008L12.4994 21.3236L13.3735 20.008C14.2365 18.6945 15.0563 17.3494 15.8316 15.9752C17.5476 12.9236 18.3824 10.8104 18.3824 9.51377C18.3824 6.29508 15.7436 3.67657 12.4994 3.67657ZM12.4994 12.5007C10.8155 12.5007 9.45034 11.1459 9.45034 9.47451C9.45034 7.80313 10.8155 6.44956 12.4994 6.44956C14.1833 6.44956 15.5485 7.80313 15.5485 9.47451C15.5485 11.1459 14.1833 12.5007 12.4994 12.5007Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <span className={styles.infoText}>{user.address}</span>
          </li>
        </ul>
      </div>
      <div
        className={styles.blockSection}
        style={{
          boxShadow: "none",
          border: "0px",
          height: "auto",
          width: "297.981px",
        }}
      >
        <h2 className={`${styles.listHeading} ${styles.infoHeading}`}>
          О СЕБЕ
        </h2>
        <p className={`${styles.unbreakableView} ${styles.fsxBgL}`}>
          {user.aboutMe}
        </p>
      </div>
      <div
        className={styles.blockSection}
        style={{
          boxShadow: "none",
          border: "0px",
          height: "auto",
          width: "297.981px",
        }}
      >
        <h2 className={`${styles.listHeading} ${styles.infoHeading}`}>
          МОТИВАЦИЯ{" "}
        </h2>
        <p className={`${styles.unbreakableView} ${styles.fsxBgL}`}>
          {user.motivation}
        </p>
      </div>
      <div
        className={styles.blockSection}
        style={{
          boxShadow: "none",
          border: "0px",
          height: "auto",
          width: "297.981px",
        }}
      >
        <h2 className={`${styles.listHeading} ${styles.infoHeading}`}>
          ЛИЧНАЯ ИНФОРМАЦИЯ{" "}
        </h2>
        <div className={`${styles.container} ${styles.containerDob}`}>
          <span className={`${styles.dobHeading} ${styles.fsxBgL}`}>
            ДАТА РОЖДЕНИЯ{" "}
          </span>
          <span className={`${styles.dob} ${styles.fsxBgL}`}>{user.dob}</span>
        </div>
        <div className={`${styles.container} ${styles.containerPob}`}>
          <span className={`${styles.pobHeading} ${styles.fsxBgL}`}>
            ГРАЖДАНСТВО
          </span>
          <span className={`${styles.pob} ${styles.fsxBgL}`}>
            {user.nationality}
          </span>
        </div>
      </div>
      <div
        className={`${styles.container} ${styles.containerLanguage}`}
        style={{
          boxShadow: "none",
          border: "0px",
          height: "auto",
          width: "297.981px",
        }}
      >
        <h2 className={`${styles.listHeading} ${styles.infoHeading}`}>
          ЯЗЫКИ{" "}
        </h2>
        <ul className={styles.list}>
          {user.languages.map((language, index) => (
            <li className={styles.infoListItem} key={index}>
              <p className={`${styles.text} ${styles.fsxBgL}`}>{language}</p>
            </li>
          ))}
        </ul>
        <h2 className={`${styles.listHeading} ${styles.infoHeading}`}>
          ПОРТФОЛИО
        </h2>
        <ul className={styles.list}>
          {data.user.portfolio.map((project, index) => (
            <li styles={"margin: 0"} className={styles.infoListItem} key={index}>
              <a href={project.link} styles={"margin: 0"} className={`${styles.text} ${styles.fsxBgL}`}>{project.title} </a>
            </li> 
           ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoList;
