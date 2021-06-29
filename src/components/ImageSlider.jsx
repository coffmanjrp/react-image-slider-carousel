import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from '../utils/SliderData';

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length - 1;

  const handlePrev = () => {
    setCurrent((current) => (current <= 0 ? length : current - 1));
  };

  const handleNext = () => {
    setCurrent((current) => (current >= length ? 0 : current + 1));
  };

  console.log(current);
  return (
    <section className="slider">
      <div className="left-arrow" onClick={handlePrev}>
        <FaArrowAltCircleLeft />
      </div>
      <div className="right-arrow" onClick={handleNext}>
        <FaArrowAltCircleRight />
      </div>
      {SliderData.map((slide, index) => (
        <div
          key={index}
          className={index === current ? 'slide active' : 'slide'}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={`slide-${index + 1}`}
              className="image"
            />
          )}
        </div>
      ))}
    </section>
  );
}
