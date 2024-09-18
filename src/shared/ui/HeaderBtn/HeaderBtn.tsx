import Link from "next/link";
import { HeaderBtnProps } from "./types";
import styles from "./HeaderBtn.module.scss"
const HeaderBtn = ({ text, link }: HeaderBtnProps) => {
    return (
        <Link href={link} 
        className={styles.btn}
        >
            {text}
        </Link>
    );
}

export default HeaderBtn;