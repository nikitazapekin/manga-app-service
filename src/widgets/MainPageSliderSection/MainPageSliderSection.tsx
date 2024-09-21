
import SliderCard from "@/shared/ui/SliderCard/SliderCard";
import styles from "./MainPageSliderSection.module.scss"
import ScrollSlider from "@/entities/SliderCarousel/SliderCarousel";
import Element from "@/shared/assets/element.png"
interface MainPageSliderSectionProps {
    title: string
}

const elems = [
    { title: "Test", image: Element },
    { title: "Test", image: Element }
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

                    {/*
                    <ScrollSlider>
                    
                        <div>
                        {elems.map(item => {

                                <SliderCard title={item.title} image={item.image} />
                            })}
                        </div>

                        <div>
                            {elems.map(item => {

                                <SliderCard title={item.title} image={item.image} />
                            })}
                            </div>
                            </ScrollSlider>
                            */}
                </div>
            </div>
            <div className={styles.preview__triangle__bottom} />
        </section>
    );
}

export default MainPageSliderSection;
{/*}
<div className={styles.card} style={{ background: 'green', height: '481px' }}>Slide 3</div>
<div className={styles.card} style={{ background: 'green', height: '481px' }}>Slide 3</div>
                        <div className={styles.card} style={{ background: 'red', height: '481px' }}>Slide 1</div>
                        <div className={styles.card} style={{ background: 'blue', height: '481px' }}>Slide 2</div>
                        */}