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