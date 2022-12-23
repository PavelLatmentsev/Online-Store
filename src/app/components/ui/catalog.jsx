import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./catalog.module.scss";
import acsessories from "../../assets/catalog/acsessories.png";
import cartridge from "../../assets/catalog/cartridge.png";
import consumables from "../../assets/catalog/consumables.png";
import kits from "../../assets/catalog/kits.png";
import machines from "../../assets/catalog/machines.png";
import needles from "../../assets/catalog/needles.png";
import paints from "../../assets/catalog/paints.png";
import pedals from "../../assets/catalog/pedals.png";
import powers from "../../assets/catalog/powers.png";
import tips from "../../assets/catalog/tips.png";
import printers from "../../assets/catalog/printers.png";

const Catalog = () => {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                <div className={styles.catalogHeader}>
                    <NavLink to={"/catalog"}>  <h1 className={styles.catalogHeaderTitle}>Каталог</h1></NavLink>
                </div>
                <div className={styles.catalogContent}>

                    <div className={styles.catalogContent_kits}>
                        <div className={styles.catalogContent_kitsBox}>
                            <NavLink to={"/catalog/tattooKits"}>
                                <span className={styles.catalogContent_kitsBox_title}>Тату наборы</span>
                                <img src={kits} alt="kits" className={styles.catalogContent_kitsBox_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_kitsCartridge}>
                            <NavLink to={"/catalog/cartridge"}> <span className={styles.catalogContent_kitsCartridge_title}>Держатели</span>
                                <img src={cartridge} alt="cartridge" className={styles.catalogContent_kitsCartridge_image} /></NavLink>
                        </div>
                    </div>
                    <div className={styles.catalogContent_machines}>
                        <div className={styles.catalogContent_machines_box}>
                            <NavLink to={"/catalog/machines"}><span className={styles.catalogContent_machines_box_title}>Татту машинки</span><img src={machines} alt="machines" className={styles.catalogContent_machines_box_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_machines_pedals}>
                            <NavLink to={"/catalog/pedalswires"}><span className={styles.catalogContent_machines_pedals_title}>Педали и провода</span><img src={pedals} alt="pedals" className={styles.catalogContent_machines_pedals_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_machines_paints}>
                            <NavLink to={"/catalog/paints"}><p className={styles.catalogContent_machines_paints_title}>Краски</p><img src={paints} alt="paints" className={styles.catalogContent_machines_paints_image} /></NavLink>
                        </div>

                    </div>
                    <div className={styles.catalogContent_powers}>
                        <div className={styles.catalogContent_powers_box}>
                            <NavLink to={"/catalog/powers"}><p className={styles.catalogContent_powers_box_title}>Блоки питания</p><img src={powers} alt="powers" className={styles.catalogContent_powers_box_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_powers_needles}>
                            <NavLink to={"/catalog/tips"}><span className={styles.catalogContent_powers_needles_title}>Наконечники</span><img src={needles} alt="needles" className={styles.catalogContent_powers_needles_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_powers_tips}>
                            <NavLink to={"/catalog/needles"}><span className={styles.catalogContent_powers_tips_title}>Татту иглы</span><img src={tips} alt="tips" className={styles.catalogContent_powers_tips_image} /></NavLink>
                        </div>

                    </div>
                    <div className={styles.catalogContent_consumables}>
                        <div className={styles.catalogContent_consumables_box}>
                            <NavLink to={"/catalog/consumables"}><p className={styles.catalogContent_consumables_box_title}>Защита, ёмкости, расходники</p><img src={consumables} alt="consumables" className={styles.catalogContent_consumables_box_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_consumables_acsessories}>
                            <NavLink to={"/catalog/acsessories"}><p className={styles.catalogContent_consumables_acsessories_title}>Аксессуары</p><img src={acsessories} alt="acsessories" className={styles.catalogContent_consumables_acsessories_image} /></NavLink>
                        </div>
                        <div className={styles.catalogContent_consumables_printers}>
                            <NavLink to={"/catalog/printers"}><span className={styles.catalogContent_consumables_printers_title}>Принтеры и планшеты</span><img src={printers} alt="printers" className={styles.catalogContent_consumables_printers_image} /></NavLink>
                        </div>

                    </div>

                </div>
            </div>
        </div>);
};

export default Catalog;
