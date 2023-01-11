import React, { useState } from "react";
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

const PedalsWiresPage = () => {
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

    const { filtredPedals, getFilterPedalsSales, isLoading, getById } = useProducts();
    const productCard = getById(productId, filtredPedals);
    return (productId ? <ProductCardPage productCard={productCard} /> : (<div>
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
                    <FilterBlock data={dataFilter} onChange={heandleChange} label="Тип педалей" />
                    <div className={styles.main_wrapperBlock}>
                        <ProductCardsList products={filtredPedals} />
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

export default PedalsWiresPage;
