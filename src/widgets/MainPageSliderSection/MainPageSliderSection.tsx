import React from 'react';
import SliderCard from "@/shared/ui/SliderCard/SliderCard";
import styles from "./MainPageSliderSection.module.scss";
import ScrollSlider from "@/entities/SliderCarousel/SliderCarousel";
import Element from "@/shared/assets/element.png";
import Swiper from '@/entities/Swiper/Swiper';

interface MainPageSliderSectionProps {
  title: string;
  scale: number
}

const elems = [
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
  { title: "Test", image: Element },
];


const MainPageSliderSection: React.FC<MainPageSliderSectionProps> = ({ title, scale }) => {
  return (
    <section className={styles.preview}>
      <div  className={`${scale == -1 ? styles.preview__triangle__top__reverse : styles.preview__triangle__top } `} />
      <div className={styles.preview__wrapper}>
        <div className={styles.preview__inner}>
          <h2 className={styles.preview__title}>
            {title}
          </h2>
 
        </div>
          <Swiper items={elems}/>
      </div>
      <div className={`${scale == -1 ? styles.preview__triangle__bottom__reverse : styles.preview__triangle__bottom }`} />
    </section>
  );
};

export default MainPageSliderSection;

 