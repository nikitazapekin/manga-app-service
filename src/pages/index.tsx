
import "../app/theme/global.scss"
import "../app/theme/normalize.scss"
import Header from "@/widgets/Header/Header";
import styles from "../app/theme/wrappers.module.scss"
import WelcomeSection from "@/widgets/WelcomeSection/WelcomeSection";
import MainPageSliderSection from "@/widgets/MainPageSliderSection/MainPageSliderSection";
import AuthModal from "@/widgets/AuthModal/AuthModal";
import { useState } from "react";
 
export default function Home() {
 
 const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div className={styles.wrapper}>
 
        <Header />
        <div className={styles.content}>
          <WelcomeSection />
          <MainPageSliderSection title={"Специально для тебя"} />

 
            <AuthModal // isOpen={isOpen} 
            />


        </div>
        wffw
      </div>
    </>
  );
}


