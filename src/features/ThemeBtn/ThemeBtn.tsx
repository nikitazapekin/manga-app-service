import styles from "./ThemeBtn.module.scss"
import useTheme from "../hooks/useTheme";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isDarkTheme } from "./ThemeBtn.selector";
import { switchTheme } from "./slice/ThemeSlice";
const ThemeBtn = () => {
    const dispatch = useDispatch()
    const isDark = useSelector(isDarkTheme)
    const handleSwitchTheme = () => {
        dispatch(switchTheme())
    }
    return (
        <div
            className={isDark ? styles.theme : styles.theme__dark}
            onClick={handleSwitchTheme}
        >
            <div className={isDark ? styles.theme__inner : styles.theme__inner__dark}>
                <div className={isDark ? styles.theme__sun : styles.theme__moon}
                />
            </div>
        </div>
    );
}

export default ThemeBtn;

/*
import useTheme from "../hooks/useTheme";
import styles from "./ThemeBtn.module.scss"
const ThemeBtn = () => {
    const { isToggled, handleSwitchTheme } = useTheme()
    return (
        <>
            <div className={styles.theme}

                onClick={handleSwitchTheme}>
                <div className={styles.theme__inner}>
                 
                    <div

className={isToggled ? styles.theme__sun : styles.theme__moon} 
                        style={{ transform: isToggled ? 'translateX(100%)' : 'translateX(0)' }}
                    />

                </div>
            </div>
        </>
    );
}

export default ThemeBtn;
*/
/*
 <div className={styles.theme__sun} />
 <div className={styles.theme__moon}>
 <div className={styles.theme__moon__dark} />
 </div>
 */