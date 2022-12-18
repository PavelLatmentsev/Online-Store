import React, { useEffect, useState } from "react";
import styles from "./bestList.module.scss";
import API from "../../api";
import ProductCard from "../common/productCard";
import NavButton from "../common/uniButton";
import Loader from "../common/loader";
const BestList = () => {
    const [products, setProducts] = useState([]);
    const [filtredProducts, setFiltredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredProducts(res.filter((product) => product.hit));
            setIsLoading(false);
        });
    }, []);

    let sum = 808;
    function heandleSeeMore() {
        sum = sum + 808;
        return sum;
    };
    const getFilterBestList = (id) => {
        if (id === "#hits") {
            return setFiltredProducts(products.filter(({ hit }) => hit));
        } else if (id === "#popular") {
            return setFiltredProducts(products.filter(({ popular }) => popular));
        } else if (id === "#news") {
            return setFiltredProducts(products.filter(({ novelty }) => novelty));
        } else if (id === "#promotion") {
            return setFiltredProducts(products.filter(({ promotion }) => promotion));
        }
    };

    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div><div>
                <ul className={styles.bestList_header}>
                    <li>
                        <button id="#hits" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(event.target.id)}> Хиты продаж</button>
                    </li>
                    <li>
                        <button id="#popular" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(event.target.id)}>  Самые популярные</button>
                    </li>
                    <li >
                        <button id="#news" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(event.target.id)} > Новые поступления</button>
                    </li>
                    <li >
                        <button id="#promotion" className={styles.bestList_headerBtn} onClick={() => getFilterBestList(event.target.id)}> Акционные товары</button>
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
