import React, { useEffect, useState } from "react";
import styles from "./bestList.module.scss";
import API from "../../api";
import ProductCard from "../common/productCard";
import NavButton from "../common/uniButton";
const BestList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.products.fetchAll().then((res) => setProducts(res));
    }, []);
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div>
                <ul className={styles.bestList_header}>
                    <li>
                        Хиты продаж
                    </li>
                    <li>
                        Самые популярные
                    </li>
                    <li >
                        Новые поступления
                    </li>
                    <li >
                        Акционные товары
                    </li>
                </ul>
            </div>
            <div className={styles.bestContainerWrapper}>
                <div className={styles.bestList_bestContainer}>
                    {products.map((product, index) => <ProductCard product={product} key={index} />)}
                </div>
                <div className={styles.bestList_Btn}><NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" /></div>
            </div>
        </div>

    </div>);
};

export default BestList;
