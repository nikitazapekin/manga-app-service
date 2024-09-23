
import { StaticImageData } from "next/image";
import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import styles from "./Swiper.module.scss";

interface SwiperProps {
  items: Array<{
    title: string,
    image: StaticImageData
  }>
}

const Swiper: React.FC<SwiperProps> = ({ items }: SwiperProps) => {
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
  return (
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
            <Image src={item.image} alt="Card" 
            className={styles.swiperItem__image}
            />
            <p 
            className={styles.swiperItem__text}
            >{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;


/*
import { StaticImageData } from "next/image";
import "./Swiper.css";
import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
interface SwiperProps {

  items: Array<{
    title: string,
    image: StaticImageData
  }>

}

const Swiper: React.FC<SwiperProps> = ({ items }: SwiperProps) => {
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

  return (
    <div
      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onScroll={handleOnScroll}
      ref={swiperRef}
      className="swiperRootContainer"
    >
      <div className="swiperItemsContainer">
       
        {items.map(item => (
          <div className="swiperItem">
            <Image src={item.image} alt="Card" />
            <p>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
*/

/*
import "./Swiper.css"
import { useState, useRef } from "react";
const Swiper = (props) => {
    const [startX, setStartX] = useState(0)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [scrollLeft, setScrollLeft] = useState(0)

    const swiperRef = useRef(null)
    function handleOnMouseDown(event) {
        setStartX(event.clientX)
        setIsMouseDown(true)
    }
    function handleOnMouseMove(event) {
        if (!isMouseDown || !swiperRef.current) return;
        event.preventDefault()
        const deltaX = (event.clientX - startX) * 0.115
        swiperRef.current.scrollLeft = scrollLeft - deltaX
    }

    function handleOnMouseUp() {
        setIsMouseDown(false)
    }
    function handleOnScroll() {
setScrollLeft(swiperRef.current.scrollLeft)
    }
    return (
        <div
            onMouseDown={(event) => {
                handleOnMouseDown(event)
            }}
            onMouseMove={(event) => {
                handleOnMouseMove(event)
            }}
            onMouseUp={() => {
                handleOnMouseUp()
            }}
            onScroll={() => {
                handleOnScroll()
            }
            }
            ref={swiperRef}
            className="swiperRootContainer">
            <div className="swiperItemsContainer">
                <div className="swiperItem">
                    Item
                </div>
                <div className="swiperItem">
                    Item
                </div>

                <div className="swiperItem">
                    Item
                </div>

                <div className="swiperItem">
                    Item
                </div>

            </div>

        </div>
    );
}

export default Swiper;

*/