import Image from "next/image";
import styles from "./Header.module.scss"
import Logo from "../../shared/assets/logo.svg"
const Header = () => {
    return (
        <header>
            <div className={styles.header__inner}>
                <Image
                    src={Logo}
                    alt="logo"
                    className={styles.header__logo}
                />

                <nav className={styles.header__navigation}>
                    <ul className={styles.header__list}>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;