import styles from "./ThemeBtn.module.scss"
const ThemeBtn = () => {
    return (
        <>
            <div className={styles.theme}>
                <div className={styles.theme__sun} />
                <div className={styles.theme__moon}>
                    <div className={styles.theme__moon__dark} />
                </div>
            </div>
        </>
    );
}

export default ThemeBtn;