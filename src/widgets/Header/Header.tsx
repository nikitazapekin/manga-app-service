import Image from "next/image";
import styles from "./Header.module.scss"
import Logo from "../../shared/assets/logo.svg"
import HeaderBtn from "@/shared/ui/HeaderBtn/HeaderBtn";
import HeaderInput from "@/features/HeaderInput/HeaderInput";
import ThemeBtn from "@/features/ThemeBtn/ThemeBtn";
interface HeaderProps {
    handleOpenModal: () => void
}
const Header = ({ handleOpenModal }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Image
                    src={Logo}
                    alt="logo"
                    className={styles.header__logo}
                />
                <nav className={styles.header__navigation}>
                    <ul className={styles.header__list}>
                        <li>
                            <HeaderBtn text={"Каталог"} link={"/catalog"} />
                        </li>
                        <li>
                            <HeaderInput />
                        </li>

                        <li>
                            <ThemeBtn />
                        </li>
                        <li>
                            <button
                                onClick={handleOpenModal}
                                className={styles.header__btn}
                            >Вход</button>
                        </li>

                    </ul>



                </nav>
            </div>


            <div className={styles.header__inner__mobile}>
                <nav className={styles.header__navigation}>
                    <ul className={styles.header__list__mobile}>
                        <li className={styles.header__mobile}>
                            <Image
                                src={Logo}
                                alt="logo"
                                className={styles.header__logo__mobile}
                            />

                            <div className={styles.header__mobile__content}>

                                <ThemeBtn />
                                <button
                                    onClick={handleOpenModal}
                                    className={styles.header__btn}
                                >
                                    Вход</button>
                            </div>
                        </li>

                        <li className={styles.header__mobile__navigation}>
                            <HeaderBtn text={"Каталог"} link={"/catalog"} />
                            <HeaderInput />
                        </li>



                    </ul>



                </nav>
            </div>
        </header>
    );
}

export default Header;