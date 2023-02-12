import React from "react";
import styles from "./sliderList.module.scss";
import NavButton from "../common/uniButton";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
const SliderList = () => {
  const history = useHistory();
  const heandleClick = () => {
    history.push("/catalog");
  };
  return (
    <section>
      <div className={styles.sliderList_box}>
        <div className={styles.container}>
          <Swiper
            spaceBetween={1}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {" "}
            <SwiperSlide>
              {" "}
              <div className={styles.sliderList}>
                <div className={styles.sliderList_block}>
                  <h1 className={styles.sliderList_block_title}>
                    Лучшие товары <br /> в мире татуировок
                  </h1>
                  <p className={styles.sliderList_block_description}>
                    Оборудование и расходники <br /> для самых ярких и
                    качественных работ
                  </p>
                  <div className={styles.sliderList_blockBtn}>
                    <span>
                      <NavButton
                        fill="#524336"
                        color="#FAF6F2"
                        title="Смотреть каталог"
                        onChange={heandleClick}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className={styles.sliderList_itemFirst}></div></SwiperSlide>
            <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemSecond}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemThird}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemFour}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemFive}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemSix}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemSeven}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemEight}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemNine}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemTen}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemEleven}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemTwelve}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemThirteen}></div></SwiperSlide>
          <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemFourTeen}></div></SwiperSlide>
           <SwiperSlide><div className={styles.sliderList_itemFirst + " " + styles.itemFifTeen}></div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default SliderList;
