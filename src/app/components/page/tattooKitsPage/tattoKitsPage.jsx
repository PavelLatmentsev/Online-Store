import React, { useState, useEffect } from "react";
import styles from "./tattoKitsPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";
const TattooKitsPage = () => {
    const [products, setProducts] = useState([]);
    const [filtredKits, setFiltredKits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredKits(res.filter(({ category }) => category === "kits"));
            setIsLoading(false);
        });
    }, []);

    const getFilterSales = (id) => {
        if (id === "#starter") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#builders") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#professional") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#consumables") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        }
    };
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div className={styles.main}>
                <div className={styles.main_title}>
                    <h1 className={styles.main_title_header}>Татту-Наборы</h1>
                </div>
                <div className={styles.main_buttonBlock}>
                    <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterSales} id="#starter" /></div>
                    <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterSales} id="#builders" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterSales} id="#professional" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" /></div>
                </div>
                <div className={styles.main_wrapperBlock}>
                    <ProductCardsList products={filtredKits} />
                    <div className={styles.main_btn}>
                        <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                    </div>
                </div>
            </div>) : <Loader />}
        </div>
    </div>);
};

export default TattooKitsPage;
