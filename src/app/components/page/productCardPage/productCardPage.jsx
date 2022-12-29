import React from "react";
import styles from "./productCardPage.module.scss";
import PropTypes from "prop-types";
const ProductCardPage = ({ productCard }) => {
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.productCardPage}>
                <div className={styles.productCardPage_header}>
                    <div className={styles.productCardPage_header_image}>
                        <img src={productCard.url} alt="productCard" />
                        <h1>fdfdsfdsdsfdsfsd</h1>
                    </div>
                </div>
            </div>
        </div>

    </div>);
};
ProductCardPage.propTypes = {
    productCard: PropTypes.object.isRequired
};
export default ProductCardPage;
