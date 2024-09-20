import SliderHeaderCard from "@/features/SliderHeaderCard/SliderHeaderCard";
import styles from "./SliderCarouselHeader.module.scss"
import Icon from "@/shared/assets/arrow.svg"
import Element from "@/shared/assets/element.png"
import SliderSwitchBtn from "@/shared/ui/SliderSwitchBtn/SliderSwitchBtn";
const SliderCarouselHeader = () => {
    return (
        <div className={styles.slider}>
         {/*   <div className={styles.slider__carousel}>
                <div className={styles.slider__slide}>
                <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                </div>
            </div>
            */}
            <div className={styles.slider__inner}>
            <div className={styles.slider__item}>
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                </div>
            </div>
            <SliderSwitchBtn scale={-1} icon={Icon} />
            {/*
            */}
        </div>);
}

export default SliderCarouselHeader;