import React from "react";
import styles from "./sliderList.module.scss";
import NavButton from "../common/uniButton";
const SliderList = () => {
  return (
    <section>
      <div className={styles.sliderList_box}>
        <div className={styles.container}>
          <div className={styles.sliderList}>
            <div className={styles.sliderList_block}>
              <h1 className={styles.sliderList_block_title}>
                Лучшие товары <br /> в мире татуировок
              </h1>
              <p className={styles.sliderList_block_description}>
                Оборудование и расходники <br /> для самых ярких и качественных
                работ
              </p>
              <div className={styles.sliderList_blockBtn}>
                <NavButton
                  fill="#524336"
                  color="#FAF6F2"
                  title="Смотреть каталог"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SliderList;
