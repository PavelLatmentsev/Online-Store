import React, { useState } from "react";
import styles from "./productCard.module.scss";
import like from "../../assets/icons/like/Like.png";
import unlike from "../../assets/icons/like/unLike.png";
import PropTypes from "prop-types";
import card from "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911.png";
const ProductCard = ({ product }) => {
    const [favorite, setFavorite] = useState(false);

    const heandleChange = () => {
        setFavorite((prevState) => !prevState);
    };
    return (
        <div className={styles.productCard}>
            <img src={card} alt="ProductCard" className={styles.productCard_slide} />
            <button className={styles.productCard_likeBtn} onClick={heandleChange}><img src={favorite ? like : unlike} alt="favorite" /></button>
            <div className={styles.productCard_infoBox}>
                <p className={styles.productCard_title}>{product.name}</p>
                <span className={styles.productCard_price}>{product.price} ₽</span>
            </div>

        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;
