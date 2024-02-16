import React, { useState, useEffect, useRef } from "react";
import Style from "./Slideshow.module.css";

export const Slideshow = ({ delay, slides, sliderWidth, sliderHeight }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [delay,index]);

  const size = {
    width: sliderWidth,
    height: sliderHeight,
  };

  return (
    <div style={size} className={Style.slideshow}>
      <div
        className={Style.slideshowSlider}
        style={{ transform: `translate3d(${-index * 380}px, 0, 0)` }}
      >
        {slides.map((slide, idx) => (
          <div
            className={Style.slide}
            key={idx}
            style={{
              background: `url(${slide.image}) center / cover no-repeat`,
            }}
          >
          </div>
        ))}
      </div>

      <div className={Style.slideshowDots}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`${Style.slideshowDot}`}
            style={index === idx ? { backgroundColor: "white" } : {}}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
