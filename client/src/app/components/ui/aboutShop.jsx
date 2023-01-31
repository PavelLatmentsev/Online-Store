import React from "react";
import styles from "./aboutShop.module.scss";
import NavButton from "../common/uniButton";
import aboutShop from "../../assets/background/aboutShop.png";
const AboutShop = () => {
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.aboutShop}>
                <div className={styles.aboutShop_imageWrapper}>
                    <img src={aboutShop} alt="aboutShop" className={styles.aboutShop_image} />
                </div>
                <div className={styles.aboutShop_title}>
                    <p className={styles.aboutShop_titleName}>Тату магазин Mr. Driskell</p>
                    <p className={styles.aboutShop_titleAbout}>Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются энтузиасты индустрии, профессиональные мастера и новички, которые только делают первые шаги в тату искусстве. Мы знаем, насколько важно грамотно и точно подобрать инструменты для продуктивных тату сеансов, и помогаем быстро найти то, что поможет их сделать именно такими.
                        В нашем ассортименте не просто тату оборудование, это буквально целая команда из грамотных и действительно эффективных помощников на вашем рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов под пристальным взглядом отечественных машиностроителей, космецевтов и брендов с мировым именем, эти товары нарабатывали опыт и каждый день становились лучше, чтобы показать, на что они способны, и помочь раскрыть ваш потенциал.</p>
                    <div className={styles.aboutShop_titleBtn}><NavButton fill="#EEEEEE" color="#BB8C5F" title="О компании" /></div>
                </div>
            </div>
        </div>
    </div>);
};

export default AboutShop;
