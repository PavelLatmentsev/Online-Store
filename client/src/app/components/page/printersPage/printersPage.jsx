import React, { useState, useEffect } from "react";
import styles from "./printersPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import ProductCardPage from "../productCardPage/productCardPage";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useProducts } from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { sortedGoods } from "../../../utils/sortFilter";
const initialState = {
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    sort: "",
    brands: ""
};
const PrinterstPage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "printers");
    const [filtredPrinters, setFiltredPrinters] = useState(initialStateFilter);
    useEffect(() => {
        setFiltredPrinters(initialStateFilter);
    }, [products]);
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredPrinters);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const dataReload = () => {
        setDataFilter(initialState);
    };
    const productCard = getById(productId, filtredPrinters);

    const getFilterPrintersSales = (id) => {
        if (id === "#starter") {
            setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#builders") {
            setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#professional") {
            setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#consumables") {
            setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        }
    };
    return (products ? <div>

        {productCard ? <ProductCardPage productCard={productCard} /> : (<div>
            <header>
                <HeaderMenu />
            </header><div className={styles.wrapper}>
                <div className={styles.container}>
                    {!isLoading ? (<div className={styles.main}>
                        <div className={styles.main_title}>
                            <h1 className={styles.main_title_header}>Принтеры</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterPrintersSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterPrintersSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterPrintersSales} id="#professional" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterPrintersSales} id="#consumables" /></div>
                        </div>
                        <FilterBlock data={dataFilter} onChange={heandleChange} label="Брэнд" onClick={dataReload} />
                        <div className={styles.main_wrapperBlock}>
                            <ProductCardsList products={sortedGoodsBox} />
                            <div className={styles.main_btn}>
                                <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                            </div>
                        </div>
                    </div>) : <Loader />}
                </div>
            </div>  <footer>
                <Footer />
            </footer>
        </div>)}
    </div> : <Loader />);
};

export default PrinterstPage;
