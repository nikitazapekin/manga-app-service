import SliderHeaderCard from "@/features/SliderHeaderCard/SliderHeaderCard";
import styles from "./SliderCarouselHeader.module.scss"
import Element from "@/shared/assets/element.png"
const SliderCarouselHeader = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__inner}>
                <div className={styles.slider__item}>
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                    <SliderHeaderCard title={" Тест"} logo={Element} />
                </div>
            </div>
        </div>);
}

export default SliderCarouselHeader;