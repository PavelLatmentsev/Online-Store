import React, { useState } from "react";
import styles from "./productCardPage.module.scss";
import PropTypes from "prop-types";
import HeaderMenu from "../../common/headerMenu";
import Footer from "../../common/footer";
import like from "../../../assets/icons/like/Like.png";
import unlike from "../../../assets/icons/like/unLike.png";
import sales from "../../../assets/icons/marks/sales.png";
import promotion from "../../../assets/icons/marks/promotion.png";
import hit from "../../../assets/icons/marks/hit.png";
import novelty from "../../../assets/icons/marks/novelty.png";
import absent from "../../../assets/icons/marks/absent.png";
import NavButton from "../../common/uniButton";
import TextField from "../../common/form/textField";
const ProductCardPage = ({ productCard }) => {
    const [favorite, setFavorite] = useState(false);
    const heandleChangeLike = () => {
        setFavorite((prevState) => !prevState);
    };
    const priceWithSales = productCard.price - (productCard.sales ? (productCard.sales * productCard.price) : null);
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.productCardPage}>
                    <div className={styles.productCardPage_header}>
                        <div className={styles.productCardPage_header_imageBlock}>
                            <img src={productCard.url} alt="productCard" className={styles.productCardPage_header_imageBlock_img} />
                            {productCard.hit && (<img src={hit} alt="hit" className={styles.productCardPage_header_imageBlock_marks} />)}
                            {productCard.promotion && (<img src={promotion} alt="promotion" className={styles.productCardPage_header_imageBlock_marks} />)}
                            {productCard.sales && (<img src={sales} alt="sales" className={styles.productCardPage_header_imageBlock_marks} />)}
                            {productCard.novelty && (<img src={novelty} alt="novelty" className={styles.productCardPage_header_imageBlock_marks} />)}
                            {productCard.absent && (<img src={absent} alt="absent" className={styles.productCardPage_header_imageBlock_marks} />)}
                            <button className={styles.productCardPage_header_imageBlock_btn} onClick={heandleChangeLike}><img src={favorite ? like : unlike} alt="favorite" /></button>
                        </div>
                        <div className={styles.productCardPage_header_descriptionBlock}>
                            <h1 className={styles.productCardPage_header_descriptionBlock_title}>{productCard.name}</h1>
                            <div className={styles.productCardPage_header_descriptionBlock_price}>
                                <span className={styles.productCardPage_header_descriptionBlock_priceFinal}>{productCard.sales ? priceWithSales : productCard.price} ₽</span>
                                <span className={styles.productCardPage_header_descriptionBlock_priceStart}>{productCard.sales ? productCard.price : ""}</span>
                                <span className={styles.productCardPage_header_descriptionBlock_amount}>Наличие: Много</span>
                            </div>
                            <p>Описание товара</p>
                            <div className={styles.productCardPage_header_descriptionBlock_basket}>
                                <button>-</button>
                                <div><TextField /></div>

                                <button>+</button>
                                <div className={styles.sales_btn}>
                                    <NavButton fill="#524336" color="#FAF6F2" title="Добавить в корзину" />
                                </div>
                                <span>Поделиться</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <footer>
            <Footer />
        </footer>
    </div>);
};
ProductCardPage.propTypes = {
    productCard: PropTypes.object.isRequired
};
export default ProductCardPage;
