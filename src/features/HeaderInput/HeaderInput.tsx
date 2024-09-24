import Image from "next/image";
import styles from "./HeaderInput.module.scss"
import Icon from "@/shared/assets/search.png"
import { useSelector } from "react-redux";
import { isDarkTheme } from "../ThemeBtn/ThemeBtn.selector";
const HeaderInput = () => {

    const isDark = useSelector(isDarkTheme)
    return (
        <div className={styles.search}>
            <input type="text"
                placeholder="Поиск..."
                className={`${styles.search__input} ${isDark ? styles.search__input__dark : ""}`}
            />
            <div className={`${styles.search__btn} ${isDark ? styles.search__btn__dark : ""}`}>
                <Image
                    src={Icon}
                    alt="Search"
                    className={styles.search__icon}
                />
            </div>
        </div>);
}

export default HeaderInput;