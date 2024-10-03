
//import SliderCarouselHeader from "@/entities/SliderCarouselHeader/SliderCarouselHeader";
import styles from "./WelcomeSection.module.scss"
import Zero from "@/shared/assets/zero.png"
//import ResearchBtn from "@/shared/ui/ResearchBtn/ResearchBtn";
import WelcomeSliderSwiper from "@/entities/WelcomeSliderSwiper/WelcomeSliderSwiper";

import Element from "@/shared/assets/element.png"
import Image from "next/image";
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




const WelcomeSection = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.welcome__inner}>
             

                    <h1 className={styles.welcome__title}>
                        Добро пожаловать
                        на мангалиб
                    </h1>
                    <button className={styles.btn}>
                        Исследовать eb
                    </button>
                    <WelcomeSliderSwiper items={elems} />
                    <Image className={styles.welcome__zero} src={Zero} alt="Zero one" />
                </div>
           
        </section>
    );
}

export default WelcomeSection; 