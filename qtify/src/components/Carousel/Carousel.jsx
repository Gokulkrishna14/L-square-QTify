import { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.css";
import { CarouselLeftNavigation } from './CarouselLeftNavigation/CarouselLeftNavigation';
import { CarouselRightNavigation } from './CarouselRightNavigation/CarouselRightNavigation';
import CardSong from "../Card/CardSong";

const Controls = ({ swiper }) => {
    useEffect(() => {
        if (swiper && swiper.slideTo) {
            swiper.slideTo(0);
        }
    }, [swiper]);

    return <></>;
};

const Carousel = ({ data }) => {
    const swiper = useSwiper();

    return (
        <div className={styles.wrapper}>
            <Swiper
                className={styles.swiperContainer}
                slidesPerView={7}
                spaceBetween={40}
                allowTouchMove
            >
                <CarouselLeftNavigation />
                <Controls swiper={swiper} />
                {data.map((ele, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <CardSong data={ele} />
                    </SwiperSlide>
                ))}
                <CarouselRightNavigation />
            </Swiper>
        </div>
    );
}

export default Carousel;

