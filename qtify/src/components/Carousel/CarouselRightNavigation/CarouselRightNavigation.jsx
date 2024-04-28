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
        <div style={{ position: "relative", cursor: "pointer", height: "100%", width: "100%" }}>
            {!isEnd && (
                <div style={{ position: "absolute", top: "70%", right: "3px", transform: "translateY(-500%)" }}>
                    <RightArrow onClick={() => swiper.slideNext()} />
                </div>
            )}
        </div>
    );
}

