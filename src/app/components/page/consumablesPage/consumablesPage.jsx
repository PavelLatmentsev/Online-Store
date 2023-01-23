import React, { useState } from "react";
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
    const { products, getFilterConsumablesSales, isLoading, getById } = useProducts();
    const filtredConsumables = products.filter(({ category }) => category === "consumables");
    const [dataFilter, setDataFilter] = useState(initialState);
    const sortedGoodsBox = sortedGoods(dataFilter, filtredConsumables);
    const heandleChange = (target) => {
        setDataFilter((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const dataReload = () => {
        setDataFilter(initialState);
    };
    const productCard = getById(productId, filtredConsumables);
    return (productId ? <ProductCardPage productCard={productCard} /> : (<div>
        <header>
            <HeaderMenu />
        </header><div className={styles.wrapper}>
            <div className={styles.container}>
                {!isLoading ? (<div className={styles.main}>
                    <div className={styles.main_title}>
                        <h1 className={styles.main_title_header}>Расходники</h1>
                    </div>
                    <div className={styles.main_buttonBlock}>
                        <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterConsumablesSales} id="#starter" filtredProducts={filtredConsumables} /></div>
                        <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterConsumablesSales} id="#builders" filtredProducts={filtredConsumables} /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterConsumablesSales} id="#professional" filtredProducts={filtredConsumables} /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterConsumablesSales} id="#consumables" filtredProducts={filtredConsumables} /></div>
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
    </div>));
};

export default ConsumablesPage;
