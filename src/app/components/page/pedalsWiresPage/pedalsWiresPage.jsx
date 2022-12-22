import React, { useState, useEffect } from "react";
import styles from "./pedalsWiresPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";

const PedalsWiresPage = () => {
    const [products, setProducts] = useState([]);
    const [filtredPedals, setFiltredPedals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredPedals(res.filter(({ category }) => category === "pedals"));
            setIsLoading(false);
        });
    }, []);

    const getFilterSales = (id) => {
        if (id === "#starter") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#builders") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#professional") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#consumables") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        }
    };
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            {!isLoading ? (<div className={styles.main}>
                <div className={styles.main_title}>
                    <h1 className={styles.main_title_header}>Педали</h1>
                </div>
                <div className={styles.main_buttonBlock}>
                    <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterSales} id="#starter" /></div>
                    <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterSales} id="#builders" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterSales} id="#professional" /></div>
                    <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" /></div>
                </div>
                <div className={styles.main_wrapperBlock}>
                    <ProductCardsList products={filtredPedals} />
                    <div className={styles.main_btn}>
                        <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                    </div>
                </div>
            </div>) : <Loader />}
        </div>
    </div>);
};

export default PedalsWiresPage;
