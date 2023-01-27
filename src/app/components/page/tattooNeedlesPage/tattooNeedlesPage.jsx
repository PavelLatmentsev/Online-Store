import React, { useState, useEffect } from "react";
import styles from "./tattooNeedlesPage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useProducts } from "../../../hooks/useProducts";
import ProductCardPage from "../productCardPage/productCardPage";
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
const TattooNeedles = () => {
    const { productId } = useParams();
    const { products, getById, isLoading } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "needles");
    const [dataFilter, setDataFilter] = useState(initialState);
    const [filtredNeedles, setFiltredNeedles] = useState(initialStateFilter);
    useEffect(() => {
        setFiltredNeedles(initialStateFilter);
    }, [products]);
    const dataReload = () => {
        setDataFilter(initialState);
    };
    const sortedGoodsBox = sortedGoods(dataFilter, filtredNeedles);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const productCard = getById(productId, filtredNeedles);
    const getFilterNeedlesSales = (id) => {
        if (id === "#starter") {
            setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#builders") {
            setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#professional") {
            setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#consumables") {
            setFiltredNeedles(products.filter(({ category }) => category === "needles"));
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
                            <h1 className={styles.main_title_header}>Татту-Иглы</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterNeedlesSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterNeedlesSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterNeedlesSales} id="#professional" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterNeedlesSales} id="#consumables" /></div>
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

export default TattooNeedles;
