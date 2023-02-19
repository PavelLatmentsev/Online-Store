import React, { useState, useEffect } from "react";
import styles from "./powerUnitPage.module.scss";
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
import Breadcrumps from "../../common/breadcrumps";
const initialState = {
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    sort: "",
    brands: ""
};
const PowerUnitPage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "powers");
    const [filtredPowers, setFiltredPowers] = useState(initialStateFilter);
    const [dataFilter, setDataFilter] = useState(initialState);
    useEffect(() => {
        setFiltredPowers(initialStateFilter);
    }, [products]);
    const dataReload = () => {
        setDataFilter(initialState);
        setFiltredPowers(initialStateFilter);
    };
    const sortedGoodsBox = sortedGoods(dataFilter, filtredPowers);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const productCard = getById(productId, filtredPowers);
    const getFilterPowersSales = (id) => {
        if (id === "#starter") {
            setFiltredPowers(products.filter(({ category, starter }) => category === "powers" && starter));
        } else if (id === "#builders") {
            setFiltredPowers(products.filter(({ category, builders }) => category === "powers" && builders));
        } else if (id === "#professional") {
            setFiltredPowers(products.filter(({ category, professions }) => category === "powers" && professions));
        }
    };
    return (products ? <div>

        {productCard ? <ProductCardPage productCard={productCard} /> : (<div>
            <header>
                <HeaderMenu />
            </header><div className={styles.wrapper}>
                <div className={styles.container}>
                    {!isLoading ? (<div className={styles.main}>
                        <div className={styles.BreadCrumps}>
                <Breadcrumps/>
                </div>
                        <div className={styles.main_title}>
                            <h1 className={styles.main_title_header}>Блоки питания</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterPowersSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterPowersSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterPowersSales} id="#professional" /></div>
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

export default PowerUnitPage;
