import React, { useState, useEffect } from "react";
import styles from "./tipsPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";
const TipsPage = () => {
    const [products, setProducts] = useState([]);
    const [filtredTips, setFiltredTips] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredTips(res.filter(({ category }) => category === "tips"));
            setIsLoading(false);
        });
    }, []);

    const getFilterSales = (id) => {
        if (id === "#starter") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#builders") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#professional") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#consumables") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        }
    };
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div className={styles.main}>
                <div className={styles.main_title}>
                    <h1 className={styles.main_title_header}>Наконечники</h1>
                </div>
                <div className={styles.main_buttonBlock}>
                    <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterSales} id="#starter" /></div>
                    <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterSales} id="#builders" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterSales} id="#professional" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" /></div>
                </div>
                <div className={styles.main_wrapperBlock}>
                    <ProductCardsList products={filtredTips} />
                    <div className={styles.main_btn}>
                        <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                    </div>
                </div>
            </div>) : <Loader />}
        </div>
    </div>);
};

export default TipsPage;
