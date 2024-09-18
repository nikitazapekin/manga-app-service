import SliderCarouselHeader from "@/entities/SliderCarouselHeader/SliderCarouselHeader";
import styles from "./WelcomeSection.module.scss"
import Zero from "@/shared/assets/zero.svg"
import ResearchBtn from "@/shared/ui/ResearchBtn/ResearchBtn";
import Image from "next/image";
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
                <ResearchBtn text="Исследовать" link={"/sign-in"} />
                </div>
                <SliderCarouselHeader />
            </div>
            </div>
            {/*
            <Image src={Zero} alt="Zero one" className={styles.welcome__zero} />
            <div className={styles.welcome__background} >
            <Image src={Zero} alt="Zero one" className={styles.welcome__zero} />
            </div>
            */}
        </section>
    );
}

export default WelcomeSection;