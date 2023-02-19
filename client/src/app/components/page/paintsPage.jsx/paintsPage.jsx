import React, { useState, useEffect } from "react";
import styles from "./paints.module.scss";
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
const PaintsPage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "paints");
    const [filtredPaints, setFiltredPaints] = useState(initialStateFilter);
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredPaints);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const dataReload = () => {
        setDataFilter(initialState);
        setFiltredPaints(initialStateFilter);
    };
    useEffect(() => {
        setFiltredPaints(initialStateFilter);
    }, [products]);
    const productCard = getById(productId, filtredPaints);
    const getFilterPaintsSales = (id) => {
        if (id === "#starter") {
            setFiltredPaints(products.filter(({ category, starter }) => category === "paints" && starter));
        } else if (id === "#builders") {
            setFiltredPaints(products.filter(({ category, builders }) => category === "paints" && builders));
        } else if (id === "#professional") {
            setFiltredPaints(products.filter(({ category, professions }) => category === "paints" && professions));
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
                            <h1 className={styles.main_title_header}>Краски</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterPaintsSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterPaintsSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterPaintsSales} id="#professional" /></div>
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

export default PaintsPage;
