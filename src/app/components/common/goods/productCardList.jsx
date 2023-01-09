import React from "react";
import styles from "./productCardsList.module.scss";
import ProductCard from "../../common/goods/productCard";
import PropTypes from "prop-types";

const ProductCardsList = ({ products }) => {
    return (
        <div className={styles.goods}>
            {products.map((product, index) => <ProductCard product={product} key={index}/>)}
        </div>
    );
};

ProductCardsList.propTypes = {
    products: PropTypes.array.isRequired
};
export default ProductCardsList;
