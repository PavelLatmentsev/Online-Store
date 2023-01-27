import React, { useState, useEffect } from "react";
import styles from "./pedalsWiresPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import { useParams } from "react-router-dom";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import ProductCardPage from "../productCardPage/productCardPage";
import { useProducts } from "../../../hooks/useProducts";
import { sortedGoods } from "../../../utils/sortFilter";
const initialState = {
    priceFieldMin: "",
    priceFieldMax: "",
    typeOfNeedles: "",
    inStock: false,
    sort: "",
    brands: ""
};
const PedalsWiresPage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "pedals");
    const [filtredPedals, setFiltredPedals] = useState(initialStateFilter);
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredPedals);
    useEffect(() => {
        setFiltredPedals(initialStateFilter);
    }, [products]);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const dataReload = () => {
        setDataFilter(initialState);
    };
    const productCard = getById(productId, filtredPedals);
    const getFilterPedalsSales = (id) => {
        if (id === "#starter") {
            setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#builders") {
            setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#professional") {
            setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#consumables") {
            setFiltredPedals(products.filter(({ category }) => category === "pedals"));
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
                            <h1 className={styles.main_title_header}>Педали</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterPedalsSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="От Билдеров" onChange={getFilterPedalsSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterPedalsSales} id="#professional" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterPedalsSales} id="#consumables" /></div>
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
            </div><footer>
                <Footer />
            </footer>
        </div>)}
    </div> : <Loader />);
};

export default PedalsWiresPage;
