import Image, { StaticImageData } from "next/image";
import styles from "./SliderHeaderCard.module.scss"
interface SliderHeaderCardProps {
    title: string,
    logo: StaticImageData
}
const SliderHeaderCard = ({ title, logo }: SliderHeaderCardProps) => {
    return (
        <div className={styles.card}>
            <Image src={logo} alt="card"
                className={styles.card__image} />
            <p className={styles.card__title}>
                {title}
            </p>
        </div>);
}
export default SliderHeaderCard;