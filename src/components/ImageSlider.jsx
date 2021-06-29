import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from '../utils/SliderData';

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const handlePrev = () => {};

  const handleNext = () => {};

  return (
    <section className="slider">
      <div className="left-arrow" onClick={handlePrev}>
        <FaArrowAltCircleLeft />
      </div>
      <div className="left-arrow" onClick={handleNext}>
        <FaArrowAltCircleRight />
      </div>
      {SliderData.map((slide, index) => (
        <img key={index} src={slide.image} alt={`slide-${index + 1}`} />
      ))}
    </section>
  );
}
