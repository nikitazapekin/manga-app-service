
import "../app/theme/global.scss"
import "../app/theme/normalize.scss"
import Header from "@/widgets/Header/Header";
import styles from "../app/theme/wrappers.module.scss"
import WelcomeSection from "@/widgets/WelcomeSection/WelcomeSection";
export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>

        <Header />
        <div className={styles.content}>
          <WelcomeSection />
        </div>
        wffw
      </div>
    </>
  );
}
