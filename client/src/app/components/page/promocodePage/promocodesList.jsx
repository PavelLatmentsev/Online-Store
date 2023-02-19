import React from "react";
import styles from "./promocodesList.module.scss";
import PromocodeCard from "./promocodeCard";
import Loader from "../../common/loader";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useSelector } from "react-redux";
import { getPromocode } from "../../../store/promocode";
import Breadcrumps from "../../common/breadcrumps";
const PromocodesList = () => {
    const promocodes = useSelector(getPromocode());
    return (<div >      <header>
        <HeaderMenu />
    </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.BreadCrumps}>
                <Breadcrumps/>
                </div>
                <div >
                    <h1 className={styles.promocodes_header}>Промокоды</h1>
                </div>
                <div className={styles.promocodes}>

                    <div className={styles.promocodes_items}>
                        {promocodes ? promocodes.map((promocode) => <PromocodeCard card={promocode} key={promocode._id} />) : <Loader />}
                    </div>
                </div>

            </div>
        </div >
        <footer>
            <Footer />
        </footer>
    </div>);
};

export default PromocodesList;
