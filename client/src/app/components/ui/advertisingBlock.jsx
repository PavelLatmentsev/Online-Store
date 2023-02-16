import React from "react";
import styles from "./advertisingBlock.module.scss";
import SeeInCatalogBtn from "../common/seeInCatalogBtn";
import { NavLink } from "react-router-dom";
const AdvertisingBlock = () => {
    return (
<div className={styles.container}>
        <div className={styles.addvertisingBlock}>
            <div className={styles.addvertisingBlock_left}>
                <p className={styles.addvertisingBlock_leftTitle}>Краски Lip Nitn</p><div></div>
                <div className={styles.addvertisingBlock_leftBtn}>

                    <NavLink to={"/catalog"}><SeeInCatalogBtn title="Смотреть в каталоге" /></NavLink>
                </div>
            </div>
            <div className={styles.addvertisingBlock_right}>
                <p className={styles.addvertisingBlock_rightTitle}>Foxx viper —хит 2021 года</p>

                <div className={styles.addvertisingBlock_righBtn}>
                    <NavLink to={"/catalog"}><SeeInCatalogBtn title="Смотреть в каталоге" /></NavLink>
                </div>
            </div>
        </div>
        </div>);
};
export default AdvertisingBlock;
