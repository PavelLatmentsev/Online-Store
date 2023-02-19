import React, { useState, useEffect } from "react";
import styles from "./cartridgePage.module.scss";
import NavButton from "../../common/uniButton";
import ProductCardsList from "../../common/goods/productCardList";
import Loader from "../../common/loader";
import FilterButton from "../../common/filterButton";
import FilterBlock from "../../common/filterBlock";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import { useParams } from "react-router-dom";
import ProductCardPage from "../productCardPage/productCardPage";
import { useProducts } from "../../../hooks/useProducts";
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

const CartridgePage = () => {
    const { productId } = useParams();
    const { products, isLoading, getById } = useProducts();
    const initialStateFilter = products.filter(({ category }) => category === "cartridge");
    const [filtredCartridge, setFiltredCartridge] = useState(initialStateFilter);
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredCartridge);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    useEffect(() => {
        setFiltredCartridge(initialStateFilter);
    }, [products]);
    const dataReload = () => {
        setDataFilter(initialState);
        setFiltredCartridge(initialStateFilter);
    };
    const productCard = getById(productId, filtredCartridge);
    const getFilterCartridgeSales = (id) => {
        if (id === "#starter") {
            setFiltredCartridge(products.filter(({ category, starter }) => category === "cartridge" && starter));
        } else if (id === "#builders") {
            setFiltredCartridge(products.filter(({ category, builders }) => category === "cartridge"));
        } else if (id === "#professional") {
            setFiltredCartridge(products.filter(({ category, professions }) => category === "cartridge" && professions));
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
                            <h1 className={styles.main_title_header}>Держатели</h1>
                        </div>
                        <div className={styles.main_buttonBlock}>
                            <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterCartridgeSales} id="#starter" /></div>
                            <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterCartridgeSales} id="#builders" /></div>
                            <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterCartridgeSales} id="#professional" /></div>
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

export default CartridgePage;
