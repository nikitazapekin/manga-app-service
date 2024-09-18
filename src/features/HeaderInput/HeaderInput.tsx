import Image from "next/image";
import styles from "./HeaderInput.module.scss"
import Icon from "@/shared/assets/search.png"
const HeaderInput = () => {
    return (
        <div className={styles.search}>
            <input type="text"
                placeholder="Поиск..."
                className={styles.search__input}
            />
            <div className={styles.search__btn}>
                <Image
                    src={Icon}
                    alt="Search"
                    className={styles.search__icon}
                />
            </div>
        </div>);
}

export default HeaderInput;