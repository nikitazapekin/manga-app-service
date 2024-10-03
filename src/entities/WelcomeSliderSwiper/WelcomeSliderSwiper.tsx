



import { StaticImageData } from "next/image";
import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import styles from "./WelcomeSliderSwiper.module.scss";
import Arrow from "@/shared/assets/arrow.svg";

interface SwiperProps {
    items: Array<{
        title: string,
        image: StaticImageData
    }>
}

const WelcomeSliderSwiper: React.FC<SwiperProps> = ({ items }: SwiperProps) => {
    const [startX, setStartX] = useState<number>(0);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const swiperRef = useRef<HTMLDivElement | null>(null);

    function handleOnMouseDown(event: MouseEvent<HTMLDivElement>): void {
        setStartX(event.clientX);
        setIsMouseDown(true);
    }

    function handleOnMouseMove(event: MouseEvent<HTMLDivElement>): void {
        if (!isMouseDown || !swiperRef.current) return;
        event.preventDefault();
        const deltaX = (event.clientX - startX) * 0.115;
        swiperRef.current.scrollLeft = scrollLeft - deltaX;
    }

    function handleOnMouseUp(): void {
        setIsMouseDown(false);
    }

    function handleOnScroll(): void {
        if (swiperRef.current) {
            setScrollLeft(swiperRef.current.scrollLeft);
        }
    }

    function scrollLeftHandler(): void {
        if (swiperRef.current) {
            const cardWidth = swiperRef.current.querySelector(`.${styles.swiperItem}`)?.clientWidth || 0;
            swiperRef.current.scrollLeft -= cardWidth;
        }
    }

    function scrollRightHandler(): void {
        if (swiperRef.current) {
            const cardWidth = swiperRef.current.querySelector(`.${styles.swiperItem}`)?.clientWidth || 0;
            swiperRef.current.scrollLeft += cardWidth;
        }
    }

    return (
        <div className={styles.swiper}>
            <div
                className={`${styles.swiper__btn} ${styles.swiper__left}`}
                onClick={scrollLeftHandler}
            >
                <Image src={Arrow} alt="arrow" />
            </div>

            <div
                onMouseDown={handleOnMouseDown}
                onMouseMove={handleOnMouseMove}
                onMouseUp={handleOnMouseUp}
                onScroll={handleOnScroll}
                ref={swiperRef}
                className={styles.swiperRootContainer}
            >
                <div className={styles.swiperItemsContainer}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.swiperItem}>
                            <Image
                                src={item.image}
                                alt="Card"
                                className={styles.swiperItem__image}
                            />
                            <p className={styles.swiperItem__text}>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`${styles.swiper__btn} ${styles.swiper__right}`}
                onClick={scrollRightHandler}
            >
                <Image style={{ transform: "scale(-1)" }} src={Arrow} alt="arrow"  className={styles.swiper__card} />
            </div>
        </div>
    );
};

export default WelcomeSliderSwiper;
 