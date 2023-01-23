import React from "react";
import styles from "./bestList.module.scss";
import ProductCard from "../common/goods/productCard";
import NavButton from "../common/uniButton";
import Loader from "../common/loader";
import { useProducts } from "../../hooks/useProducts";

const BestList = () => {
    const { getFilterBestList, isLoading, products } = useProducts();
    console.log("dsds", products);
    const filtredProducts = products.filter(({ hit }) => hit);
    console.log("dsds", filtredProducts);
    let sum = 808;
    function heandleSeeMore() {
        sum = sum + 808;
        return sum;
    };

    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div><div>
                <ul className={styles.bestList_header}>
                    <li>
                        <button id="#hits" className={styles.bestList_headerBtn} onClick={(id) => getFilterBestList(id, filtredProducts)}> Хиты продаж</button>
                    </li>
                    <li>
                        <button id="#popular" className={styles.bestList_headerBtn} onClick={(id) => getFilterBestList(id, filtredProducts)}>  Самые популярные</button>
                    </li>
                    <li >
                        <button id="#news" className={styles.bestList_headerBtn} onClick={(id) => getFilterBestList(id, filtredProducts)} > Новые поступления</button>
                    </li>
                    <li >
                        <button id="#promotion" className={styles.bestList_headerBtn} onClick={(id) => getFilterBestList(id, filtredProducts)}> Акционные товары</button>
                    </li>
                </ul>
            </div>
                <div className={styles.bestContainerWrapper}>
                    <div className={styles.bestList_bestContainer} style={{ height: `${sum}px` }}>
                        {filtredProducts.map((product, index) => <ProductCard product={product} key={index} />)}
                    </div>
                    <div className={styles.bestList_Btn}><NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" onChange={heandleSeeMore} /></div>
                </div></div>) : <Loader />}

        </div>

    </div >);
};

export default BestList;
