
import "../app/theme/global.scss"
import "../app/theme/normalize.scss"
import Header from "@/widgets/Header/Header";
import styles from "../app/theme/wrappers.module.scss"
import WelcomeSection from "@/widgets/WelcomeSection/WelcomeSection";
import MainPageSliderSection from "@/widgets/MainPageSliderSection/MainPageSliderSection";
import AuthModal from "@/widgets/AuthModal/AuthModal";
import { setIsOpen } from "@/widgets/AuthModal/AuthModal.slice";
import { useDispatch } from "react-redux";
import WelcomeFindSection from "@/widgets/WelcomeFindSection/WelcomeFindSection";
import Footer from "@/widgets/Footer/Footer";
import Swiper from "@/entities/Swiper/Swiper"
export default function Home() {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(setIsOpen())
    console.log("open")
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Header handleOpenModal={handleOpenModal} />
        <div className={styles.content}>
          <WelcomeSection />
          <MainPageSliderSection title={"Специально для тебя"} />
          <WelcomeFindSection />
          <AuthModal
            handleOpenModal={handleOpenModal}
          />


          <Swiper />

        </div>
        <Footer />
      </div>
    </>
  );
}


