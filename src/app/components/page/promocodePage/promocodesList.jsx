import React, { useEffect, useState } from "react";
import styles from "./promocodesList.module.scss";
import PromocodeCard from "./promocodeCard";
import API from "../../../api";
import Loader from "../../common/loader";

const PromocodesList = () => {
    const [promocodes, setPromocodes] = useState();
    console.log(promocodes);
    useEffect(() => {
        API.promocodes.fetchAll().then((res) => setPromocodes(res));
    }, []);
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div >
                <h1 className={styles.promocodes_header}>Промокоды</h1>
            </div>
            <div className={styles.promocodes}>

                <div className={styles.promocodes_items}>
                    {promocodes ? promocodes.map((promocode) => <PromocodeCard card={promocode} key={promocode._id} />) : <Loader />}
                </div>
            </div>
        </div>
    </div >);
};

export default PromocodesList;
