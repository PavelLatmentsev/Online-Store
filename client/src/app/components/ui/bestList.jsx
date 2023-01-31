import React, { useState, useEffect } from "react";
import styles from "./bestList.module.scss";
import ProductCard from "../common/goods/productCard";
import NavButton from "../common/uniButton";
import Loader from "../common/loader";
import { useProducts } from "../../hooks/useProducts";

const BestList = () => {
    const { isLoading, products } = useProducts();
    const initialStateFilter = products.filter(({ hit }) => hit);
    const [filtredProducts, setFilterProducts] = useState(initialStateFilter);
    useEffect(() => {
        setFilterProducts(initialStateFilter);
    }, [products]);
    const getFilterBestList = ({ target }) => {
        const { id } = target;
        if (id === "#hits") {
            setFilterProducts(products.filter(({ hit }) => hit));
        } else if (id === "#popular") {
            setFilterProducts(products.filter(({ popular }) => popular));
        } else if (id === "#news") {
            setFilterProducts(products.filter(({ novelty }) => novelty));
        } else if (id === "#promotion") {
            setFilterProducts(products.filter(({ promotion }) => promotion));
        }
    };
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
                        <button id="#hits" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(window.event)}> Хиты продаж</button>
                    </li>
                    <li>
                        <button id="#popular" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(window.event)}>  Самые популярные</button>
                    </li>
                    <li >
                        <button id="#news" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(window.event)} > Новые поступления</button>
                    </li>
                    <li >
                        <button id="#promotion" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(window.event)}> Акционные товары</button>
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
