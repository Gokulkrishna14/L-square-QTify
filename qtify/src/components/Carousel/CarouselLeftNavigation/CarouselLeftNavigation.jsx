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
        <div style={{ position: "relative", cursor: "pointer", height: "100%", width: "100%" }}>
            {!isBeginning && (
                <div style={{ position: "absolute", top: "70%", left: "3px", transform: "translateY(-500%)" }}>
                    <LeftArrow onClick={() => swiper.slidePrev()} />
                </div>
            )}
        </div>
    );
}

