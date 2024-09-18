import styles from "./ResearchBtn.module.scss"
import Link from "next/link"
interface ResearchBtnProps {
    text: string,
    link: string
}
const ResearchBtn = ({ text, link }: ResearchBtnProps) => {
    return (
        <Link href={link} className={styles.btn}>
            {text}
        </Link>
    );
}

export default ResearchBtn;