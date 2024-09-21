import styles from "./AuthModal.module.scss"
import User from "@/shared/assets/icons/user.png"
import Lock from "@/shared/assets/icons/lock.png"
import Image from "next/image"
import Discord from "@/shared/assets/social-networks/discord.png"
import Vk from "@/shared/assets/social-networks/vk.png"
import Google from "@/shared/assets/social-networks/google.png"
import { useSelector } from "react-redux"
import { AuthModalSelector } from "./AuthModal.selector"
import { setIsOpen } from "./AuthModal.slice"
interface AuthModalProps {
    handleOpenModal: () => void
}
const AuthModal = (  
    { handleOpenModal }: AuthModalProps
) => {

    const isOpen = useSelector(AuthModalSelector)
    return (
        <>
            {isOpen && (

                <div className={styles.modal}>
                    <form className={styles.modal__inner}>
                        <div className={styles.modal__content}>
                            <div className={styles.modal__header}>
                                <p className={styles.modal__sign__in}>
                                    Вход
                                </p>
                                <p className={styles.modal__sign__up}>
                                    Регистрация
                                </p>
                            </div>
                            <p className={styles.modal__title}>
                                Вход через никнейм или Email
                            </p>
                            <div className={styles.modal__field}>
                                <Image src={User} alt="icon" className={styles.modal__icon} />
                                <input
                                    className={styles.modal__input}
                                    type="email" placeholder="Введите никнейм или Email"
                                />
                            </div>
                            <div className={styles.modal__field}>
                                <Image src={Lock} alt="icon" className={styles.modal__icon} />
                                <input
                                    className={styles.modal__input}
                                    type="email" placeholder="Введите пароль"
                                />
                            </div>



                            <div className={styles.modal__remember}>
                                <input type="checkbox" className={styles.modal__checkbox} />
                                <p className={styles.modal__remember__text}>
                                    Запомнить меня
                                </p>
                            </div>


                            <div className={styles.modal__line} />
                            <button className={styles.modal__btn}>
                                Войти
                            </button>

                            <div className={styles.modal__or}>
                                <div className={styles.modal__or__line} />
                                <p className={styles.modal__or__text}>
                                    Или
                                </p>
                                <div className={styles.modal__or__line} />
                            </div>


                            <p className={styles.modal__title}>
                                Вход через социальные сети
                            </p>


                            <div className={styles.modal__networks}>

                                <div className={`${styles.modal__network} ${styles.modal__network__discord}`}>
                                    <Image src={Discord} className={styles.network__image} alt="network" />
                                </div>

                                <div className={`${styles.modal__network} ${styles.modal__network__google}`}>
                                    <Image src={Google} className={styles.networks__image} alt="network" />
                                </div>
                                <div className={`${styles.modal__network} ${styles.modal__network__vk}`}>
                                    <Image src={Vk} className={styles.networks__image} alt="network" />
                                </div>
                            </div>

                            <div className={styles.modal__footer}>
                                <span className={styles.modal__footer__text}>
                                    Вы забыли пароль?
                                </span>
                                <span className={styles.modal__restore}>
                                    Восстановить
                                </span>
                            </div>

                        </div>
                    </form>
                    <div className={styles.modal__overlay}
                    onClick={handleOpenModal}
                    />
                </div>
            )}
        </>
    );
}

export default AuthModal;