import React from "react";
import styles from "./sliderBrands.module.scss";
import kuro from "../../assets/sliderbrands/kuro.png";
import hanafy from "../../assets/sliderbrands/hanafy.png";
import tattoo from "../../assets/sliderbrands/tattoo.png";
import aloe from "../../assets/sliderbrands/aloe.png";
import dermalize from "../../assets/sliderbrands/dermalize.png";
import face from "../../assets/sliderbrands/face.png";
import h2o from "../../assets/sliderbrands/h2o.png";
import ink from "../../assets/sliderbrands/ink.png";
import chey from "../../assets/sliderbrands/chey.png";
import kwadrone from "../../assets/sliderbrands/kwadrone.png";
import horizontDevide from "../../assets/icons/navigation/horizontdev.png";
// import verticaldev from "../../assets/icons/navigation/verticaldev.png";

const SliderBrands = () => {
    return (
        <div className={styles.sliderBrands_wrapper}>
            <div className={styles.container}>
                <h1 className={styles.sliderBrands_title}>Популярные бренды</h1>
                <h3 className={styles.sliderBrands_btn}>Смотреть все</h3>
                <div className={styles.sliderBrands}>
                    <div className={styles.sliderBrands_box_wrapperFirst}>
                        <div className={styles.sliderBrands_box_wrapperSecond}>
                            <div className={styles.sliderBrands_box_wrapperThird}>
                                <div className={styles.sliderBrands_box_wrapperFour}>
                                    <div className={styles.sliderBrands_top}>
                                        <img src={kuro} alt="kuro" /><img src={hanafy} alt="hanafy" /><img src={tattoo} alt="tattoo" /><img src={aloe} alt="aloe" /><img src={dermalize} alt="dermalize" />
                                    </div>
                                    <div><img src={horizontDevide} alt="horizontDevide" className={styles.sliderBrands_devider} /></div>
                                    <div className={styles.sliderBrands_bottom}>
                                        <img src={face} alt="face" /><img src={h2o} alt="h2o" /><img src={ink} alt="ink" /><img src={chey} alt="chey" /><img src={kwadrone} alt="kwadrone" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default SliderBrands;
