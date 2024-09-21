import  Image  from "next/image";
import { StaticImageData } from "next/image";
import styles from "./SliderCard.module.scss"
interface SliderCardProps {
    image: StaticImageData,
    title: string
}
const SliderCard = ({ image, title }: SliderCardProps) => {
    return (<div className={styles.card}>
        <Image
           
            className={styles.card__image}
            src={image} alt="Card" />
        <p className={styles.card__title}>
            {title}
        </p>
    </div>);
}

export default SliderCard;