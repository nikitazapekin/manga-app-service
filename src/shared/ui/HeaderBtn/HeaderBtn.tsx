import Link from "next/link";
import { HeaderBtnProps } from "./types";
import styles from "./HeaderBtn.module.scss"
import { useSelector } from "react-redux";
import { isDarkTheme } from "@/shared/ui/ThemeBtn/ThemeBtn.selector";

const HeaderBtn = ({ text, link }: HeaderBtnProps) => {
    const isDark = useSelector(isDarkTheme)
    return (
        <Link href={link} 
        className={`${styles.btn} ${ isDark ? styles.btn__dark : ""}`}
        >
            {text}
        </Link>
    );
}

export default HeaderBtn;