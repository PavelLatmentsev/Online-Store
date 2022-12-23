import React, { useState, useEffect } from "react";
import styles from "./printersPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import API from "../../../api";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../ui/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";

const PrinterstPage = () => {
    const [dataFilter, setDataFilter] = useState({
        priceFieldMin: "",
        priceFieldMax: "",
        typeOfNeedles: "",
        inStock: true,
        Sort: ""
    });
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const [products, setProducts] = useState([]);
    const [filtredPrinters, setFiltredPrinters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredPrinters(res.filter(({ category }) => category === "printers"));
            setIsLoading(false);
        });
    }, []);

    const getFilterSales = (id) => {
        if (id === "#starter") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#builders") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#professional") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#consumables") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        }
    };
    return (<div>
        <header>
            <HeaderMenu />
        </header><div className={styles.wrapper}>
            <div className={styles.container}>
                {!isLoading ? (<div className={styles.main}>
                    <div className={styles.main_title}>
                        <h1 className={styles.main_title_header}>Принтеры</h1>
                    </div>
                    <div className={styles.main_buttonBlock}>
                        <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterSales} id="#starter" /></div>
                        <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterSales} id="#builders" /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterSales} id="#professional" /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterSales} id="#consumables" /></div>
                    </div>
                    <FilterBlock data={dataFilter} onChange={heandleChange} label="Тип принтера" />
                    <div className={styles.main_wrapperBlock}>
                        <ProductCardsList products={filtredPrinters} />
                        <div className={styles.main_btn}>
                            <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                        </div>
                    </div>
                </div>) : <Loader />}
            </div>
        </div>  <footer>
            <Footer />
        </footer>
    </div>);
};

export default PrinterstPage;
