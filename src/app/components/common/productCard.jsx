import React, { useState } from "react";
import styles from "./productCard.module.scss";
import like from "../../assets/icons/like/Like.png";
import unlike from "../../assets/icons/like/unLike.png";
import PropTypes from "prop-types";
import sales from "../../assets/icons/marks/sales.png";
import promotion from "../../assets/icons/marks/promotion.png";
import hit from "../../assets/icons/marks/hit.png";
import novelty from "../../assets/icons/marks/novelty.png";
import absent from "../../assets/icons/marks/absent.png";

const ProductCard = ({ product }) => {
    const [favorite, setFavorite] = useState(false);

    const heandleChange = () => {
        setFavorite((prevState) => !prevState);
    };
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard_imageBlock}>
                <div>
                    <img src={product.url} alt="ProductCard" className={styles.productCard_slide} />
                    {product.hit && (<img src={hit} alt="hit" className={styles.productCard_marks} />)}
                    {product.promotion && (<img src={promotion} alt="promotion" className={styles.productCard_marks} />)}
                    {product.sales && (<img src={sales} alt="sales" className={styles.productCard_marks} />)}
                    {product.novelty && (<img src={novelty} alt="novelty" className={styles.productCard_marks} />)}
                    {product.absent && (<img src={absent} alt="absent" className={styles.productCard_marks} />)}
                    <button className={styles.productCard_likeBtn} onClick={heandleChange}><img src={favorite ? like : unlike} alt="favorite" /></button>
                </div>
                <div className={styles.productCard_infoBox}>
                    <p className={styles.productCard_title}>{product.name}</p>
                </div>
            </div >
            <div className={styles.productCard_priceBlock}>
                <span className={styles.productCard_price}>{product.price} ₽</span>
                <span className={styles.productCard_startPrice}>{product.price}</span>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;
