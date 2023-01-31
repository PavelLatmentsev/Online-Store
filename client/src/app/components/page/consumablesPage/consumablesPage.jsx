import React, { useState, useEffect } from "react";
import styles from "./consumablesPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useProducts } from "../../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductCardPage from "../productCardPage/productCardPage";
import { sortedGoods } from "../../../utils/sortFilter";
const initialState = {
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    sort: "",
    brands: ""
};
const ConsumablesPage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "consumables");
    const [filtredConsumables, setFiltredConsumables] = useState(initialStateFilter);
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredConsumables);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const dataReload = () => {
        setDataFilter(initialState);
    };
    useEffect(() => {
        setFiltredConsumables(initialStateFilter);
    }, [products]);
    const productCard = getById(productId, filtredConsumables);

    const getFilterConsumablesSales = (id) => {
        if (id === "#starter") {
            setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#builders") {
            setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#professional") {
            setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#consumables") {
            setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
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
                            <h1 className={styles.main_title_header}>Расходники</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterConsumablesSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterConsumablesSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterConsumablesSales} id="#professional" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterConsumablesSales} id="#consumables" /></div>
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
            </div> <footer>
                <Footer />
            </footer>
        </div>)}
    </div> : <Loader />);
};

export default ConsumablesPage;
