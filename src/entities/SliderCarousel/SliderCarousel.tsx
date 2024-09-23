import React, { useRef, useState } from 'react';
import styles from './SliderCarousel.module.scss';

interface ScrollSliderProps {
  children: React.ReactNode[];
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartPos(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    requestAnimationFrame(() => {
      if (sliderRef.current) {

        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startPos) * 0.5; 
        sliderRef.current.scrollLeft = scrollLeft - walk;
      }
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartPos(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    requestAnimationFrame(() => {
      if(sliderRef.current) {

        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startPos) * 0.5; 
        sliderRef.current.scrollLeft = scrollLeft - walk;
      }
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`${styles.slider} ${isDragging ? styles.dragging : ''}`}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children.map((child, index) => (
        <div key={index} className={styles.slide}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSlider;



/*
import React, { useRef, useState } from 'react';
import styles from './SliderCarousel.module.scss';

interface ScrollSliderProps {
  children: React.ReactNode[];
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

 
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartPos(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

   
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPos) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

 
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`${styles.slider} ${isDragging ? styles.dragging : ''}`}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {children.map((child, index) => (
        <div key={index} className={styles.slide}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollSlider;

 */