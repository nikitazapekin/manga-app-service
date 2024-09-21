
import "../app/theme/global.scss"
import "../app/theme/normalize.scss"
import Header from "@/widgets/Header/Header";
import styles from "../app/theme/wrappers.module.scss"
import WelcomeSection from "@/widgets/WelcomeSection/WelcomeSection";
import MainPageSliderSection from "@/widgets/MainPageSliderSection/MainPageSliderSection";
export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>

        <Header />
        <div className={styles.content}>
          <WelcomeSection />
          <MainPageSliderSection title={"Специально для тебя"} />
        </div>
        wffw
      </div>
    </>
  );
}
