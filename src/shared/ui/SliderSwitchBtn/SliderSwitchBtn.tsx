import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./SliderSwitchBtn.module.scss"
interface SliderSwitchBtnProps {
    icon: StaticImageData,
    scale: number
}
const SliderSwitchBtn = ({ icon, scale }: SliderSwitchBtnProps) => {
    return (<div style={{scale: `scale(${scale})`}} className={styles.btn}> 
        <Image src={icon} alt="icon" />
       
    </div>);
}
export default SliderSwitchBtn;

