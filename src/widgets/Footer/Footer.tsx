import styles from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <p className={styles.footer__text}>
                © 2024 
                </p>
                <p className={styles.footer__text__underline}>
                 MangaLib
                </p>
            </div>
        </footer>);
}

export default Footer;