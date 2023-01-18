import React from "react";
import styles from "./reviewsList.module.scss";
import Reviews from "./review";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper";
const ReviewsList = () => {
    return (
        <div className={styles.reviews_wrapper}>
            <div className={styles.container}>
                <div className={styles.reviews}>
                    <div className={styles.reviewsTitle}>
                        <h1 className={styles.reviewsTitle_item}>Отзывы</h1>
                    </div>
                    <div className={styles.reviewsItems}>
                        <Swiper
                            spaceBetween={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}

                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >     <SwiperSlide>  <div className={styles.reviewsBox_leftItem}><Reviews /> </div></SwiperSlide>
                            <SwiperSlide>         <div className={styles.reviewsBox_rightItem}><Reviews /> </div></SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default ReviewsList;
