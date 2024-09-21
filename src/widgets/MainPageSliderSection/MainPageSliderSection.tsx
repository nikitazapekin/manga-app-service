import SliderCard from "@/shared/ui/SliderCard/SliderCard";
import styles from "./MainPageSliderSection.module.scss"
import ScrollSlider from "@/entities/SliderCarousel/SliderCarousel";
import Element from "@/shared/assets/element.png";

interface MainPageSliderSectionProps {
    title: string;
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

 
const chunkArray = (array: typeof elems, chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const MainPageSliderSection = ({ title }: MainPageSliderSectionProps) => {
    const groupedElems = chunkArray(elems, 4); // Разбиваем на группы по 4 карточки

    return (
        <section className={styles.preview}>
            <div className={styles.preview__triangle__top} />
            <div className={styles.preview__wrapper}>
                <div className={styles.preview__inner}>
                    <h2 className={styles.preview__title}>
                        {title}
                    </h2>

                    <ScrollSlider>
                        {groupedElems.map((group, groupIndex) => (
                            <div
                       
                            key={groupIndex} className={styles.preview__group}>
                                {group.map((item, itemIndex) => (
                                    <SliderCard key={itemIndex} title={item.title} image={item.image} />
                                ))}
                            </div>
                        ))}
                    </ScrollSlider>
                </div>
            </div>
            <div className={styles.preview__triangle__bottom} />
        </section>
    );
};

export default MainPageSliderSection;


/*

import SliderCard from "@/shared/ui/SliderCard/SliderCard";
import styles from "./MainPageSliderSection.module.scss"
import ScrollSlider from "@/entities/SliderCarousel/SliderCarousel";
import Element from "@/shared/assets/element.png"
interface MainPageSliderSectionProps {
    title: string
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
]
const MainPageSliderSection = ({ title }: MainPageSliderSectionProps) => {
    return (
        <section className={styles.preview}>
            <div className={styles.preview__triangle__top} />
            <div className={styles.preview__wrapper}>

                <div className={styles.preview__inner}>
                    <h2 className={styles.preview__title}>
                        {title}
                    </h2>


                    <ScrollSlider>
                        {elems.map((item, index) => (
                            <div key={index}>
                            <SliderCard title={item.title} image={item.image} />
                            </div>
                        ))}

                    </ScrollSlider>
                    <div>

                        выувц
                    </div>
                    <div>

                        выувц
                    </div>
                </div>
            </div>
            <div className={styles.preview__triangle__bottom} />
        </section>
    );
}

export default MainPageSliderSection;
 */