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

  // Начало перетаскивания
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartPos(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Перетаскивание
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPos) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Завершение перетаскивания
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


/*
import React, { useRef } from 'react';
import styles from './SliderCarousel.module.scss';

interface ScrollSliderProps {
  children: React.ReactNode[];
}

const ScrollSlider: React.FC<ScrollSliderProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.slider} ref={sliderRef}>
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

/*
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './SliderCarousel.module.scss';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = children.length;

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventScrollOnSwipe: true,
  });

  return (
    <div className={styles.carousel} {...handlers}>
      <div
        className={styles['carousel-track']}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className={styles['carousel-slide']}>
            {child}
          </div>
        ))}
      </div>
      <div className={styles['carousel-controls']}>
        <button onClick={goToPrevious}>Prev</button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
*/