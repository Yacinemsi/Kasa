import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    let index = currentIndex - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    let index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={goToPreviousSlide} className="slider-arrow prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {images.map((image, i) => (
        <div
          className={i === currentIndex ? "slide active-slide" : "slide"}
          key={i}
        >
          <img src={image} alt="" />
          <div className="image-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </div>
      ))}

      <button onClick={goToNextSlide} className="slider-arrow next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Slider;
