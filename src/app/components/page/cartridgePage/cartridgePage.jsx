import React, { useState } from "react";
import styles from "./cartrdgePage.module.scss";
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
const CartridgePage = () => {
    const { productId } = useParams();

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
    const { filtredCartridge, getFilterCartridgeSales, isLoading, getById } = useProducts();
    const productCard = getById(productId, filtredCartridge);

    return (productId ? <ProductCardPage productCard={productCard} /> : (<div>
        <header>
            <HeaderMenu />
        </header><div className={styles.wrapper}>
            <div className={styles.container}>
                {!isLoading ? (<div className={styles.main}>
                    <div className={styles.main_title}>
                        <h1 className={styles.main_title_header}>Держатели</h1>
                    </div>
                    <div className={styles.main_buttonBlock}>
                        <div className={styles.main_buttonBlock_item}>  <FilterButton title="Для Начинающих" onChange={getFilterCartridgeSales} id="#starter" /></div>
                        <div className={styles.main_buttonBlock_item}> <FilterButton title="От Билдеров" onChange={getFilterCartridgeSales} id="#builders" /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Для Профессионалов" onChange={getFilterCartridgeSales} id="#professional" /></div>
                        <div className={styles.main_buttonBlock_item}>   <FilterButton title="Расходники" onChange={getFilterCartridgeSales} id="#consumables" /></div>
                    </div>
                    <FilterBlock data={dataFilter} onChange={heandleChange} label="Тип держателя" />
                    <div className={styles.main_wrapperBlock}>
                        <ProductCardsList products={filtredCartridge} />
                        <div className={styles.main_btn}>
                            <NavButton fill="#EEEEEE;" color="#BB8C5F" title="Показать еще" />
                        </div>
                    </div>
                </div>) : <Loader />}
            </div>
        </div><footer>
            <Footer />
        </footer>
    </div>));
};

export default CartridgePage;
