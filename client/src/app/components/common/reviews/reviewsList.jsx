import React from "react";
import styles from "./reviewsList.module.scss";
import Reviews from "./review";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { useSelector } from "react-redux";
import { getReviewList } from "../../../store/review";
import Loader from "../loader";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
const ReviewsList = () => {
    const reviews = useSelector(getReviewList());
    return (
        <div className={styles.reviews_wrapper}>
            <div className={styles.container}>
                {reviews ? (<div className={styles.reviews}>
                    <div className={styles.reviewsTitle}>
                      <Link to={"/about"} onClick={() => scroll.scrollToBottom()}><h1 className={styles.reviewsTitle_item}>Оставить отзыв</h1></Link>
                    </div>
                    <div className={styles.reviewsItems}>
                        <Swiper
                            spaceBetween={1}
                            centeredSlides={false}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                            }}

                            navigation={false}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >  {reviews.map(item => <SwiperSlide key= {item._id}>  <div className={styles.reviewsBox_leftItem} > <Reviews review = {item} /> </div></SwiperSlide>)}
                            {/* <SwiperSlide>         <div className={styles.reviewsBox_rightItem}><Reviews /> </div></SwiperSlide> */}

                        </Swiper>
                    </div>

                </div>) : <Loader/>}

            </div >
        </div >
    );
};

export default ReviewsList;
