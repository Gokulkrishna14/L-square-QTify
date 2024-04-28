import { useEffect, useState } from "react";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";

export function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);

    useEffect(() => {
        if (swiper) {
            swiper.on("slideChange", function () {
                setIsBeginning(swiper.isBeginning);
            });
        }
    }, [swiper]); 

    return (
        <div style={{ position: "absolute", top: "65%", left: "30px", transform: "translate(-50%, -50%)", cursor: "pointer", zIndex: 1000 }}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
}
