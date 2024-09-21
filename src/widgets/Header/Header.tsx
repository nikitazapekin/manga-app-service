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
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;