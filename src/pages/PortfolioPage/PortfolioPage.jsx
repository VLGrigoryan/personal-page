import React from "react";
import { Slideshow } from "../../ui/Slider/Slideshow";
import styles from "./PortfolioPage.module.css";

const PortfolioPage = ({ data }) => {

  const handleItemClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
       <div className={styles.content}>
        {data.user.portfolio.map((project, index) => (
          <div key={index} className={styles.item}>
            <a href={project.link}>
              <Slideshow
                delay={3500}
                sliderWidth={380}
                sliderHeight={200}
                slides={project.slides}
                onClick={() => handleItemClick(project.link)}
              />
            </a>
            <p className={`${styles.title} text_type_main-default`}>
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
