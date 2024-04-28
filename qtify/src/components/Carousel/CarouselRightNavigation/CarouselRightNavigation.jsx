import { useEffect, useState } from "react";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import { useSwiper } from "swiper/react";


export function CarouselRightNavigation() {
    const swiper = useSwiper(); 
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiper) {
            swiper.on("slideChange", function () {
                setIsEnd(swiper.isEnd);
            });
        }
    }, [swiper]); 

    return (
        <div style={{ position: "absolute", top: "65%", right: "30px", transform: "translate(50%, -50%)", cursor: "pointer", zIndex: 1000 }}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
}
