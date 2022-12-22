import React, { useState, useEffect } from "react";
import styles from "./accessoriesPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";

const AccessoriesPage = () => {
    const [products, setProducts] = useState([]);
    const [filtredAccessories, setFiltredAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredAccessories(res.filter(({ category }) => category === "accessories"));
            setIsLoading(false);
        });
    }, []);

    const getFilterSales = (id) => {
        if (id === "#starter") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#builders") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#professional") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#consumables") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        }
    };
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div className={styles.main}>
                <div className={styles.main_title}>
                    <h1 className={styles.main_title_header}>Аксессуары</h1>
                </div>
                <div className={styles.main_buttonBlock}>
                    <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterSales} id="#starter" /></div>
                    <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterSales} id="#builders" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterSales} id="#professional" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" /></div>
                </div>
                <div className={styles.main_wrapperBlock}>
                    <ProductCardsList products={filtredAccessories} />
                    <div className={styles.main_btn}>
                        <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                    </div>
                </div>
            </div>) : <Loader />}
        </div>
    </div>);
};

export default AccessoriesPage;
