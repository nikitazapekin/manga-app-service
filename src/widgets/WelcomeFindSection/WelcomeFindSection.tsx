import styles from "./WelcomeFindSection.module.scss"
import Image from "next/image";
import Zero from "@/shared/assets/Zero-second.png"
const WelcomeFindSection = () => {
    return (

        <section className={styles.find}>
            <div className={styles.find__triangle__top} />
            {/*
            */}
            <div className={styles.find__content}>

                <Image src={Zero} alt="Zero one"
                
                className={styles.find__image}
                />
                <div className={styles.find__inner}>

                </div>
            </div>
            <div className={styles.find__triangle__bottom} />
        </section>
    );
}

export default WelcomeFindSection;