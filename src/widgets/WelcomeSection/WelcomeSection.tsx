/*
import SliderCarouselHeader from "@/entities/SliderCarouselHeader/SliderCarouselHeader";
import styles from "./WelcomeSection.module.scss"
//import Zero from "@/shared/assets/zero.svg"
import ResearchBtn from "@/shared/ui/ResearchBtn/ResearchBtn";
//import Image from "next/image";
const WelcomeSection = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.welcome__inner}>
                <div className={styles.welcome__preview}>
                    <h1 className={styles.welcome__preview__title}>
                    Добро пожаловать 
                    на мангалиб
                    </h1>
                  
                    <button className={styles.btn}>
                        scasc
                    </button>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;
*/
import SliderCarouselHeader from "@/entities/SliderCarouselHeader/SliderCarouselHeader";
import styles from "./WelcomeSection.module.scss"
//import Zero from "@/shared/assets/zero.svg"
import ResearchBtn from "@/shared/ui/ResearchBtn/ResearchBtn";
import WelcomeSliderSwiper from "@/entities/WelcomeSliderSwiper/WelcomeSliderSwiper";
//import Image from "next/image";
import Element from "@/shared/assets/element.png"

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
      
           <div className={styles.welcome__background}> 
            <div className={styles.welcome__inner}>
                <div className={styles.welcome__preview}>
                <h1 className={styles.welcome__title}>
                Добро пожаловать 
                на мангалиб
                </h1>
                <button className={styles.btn}>
                    Исследовать
                    </button>
           
                </div>
                <div className={styles.welcome__content}>
{/*}
   <SliderCarouselHeader />
   */}

   <WelcomeSliderSwiper items={elems} />
                </div>
              
            </div>
            </div>
            <div className={styles.welcome__triangle} />

           
         
        </section>
    );
}

export default WelcomeSection;
/*
*/