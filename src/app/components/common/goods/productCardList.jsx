import React from "react";
import styles from "./productCardsList.module.scss";
import ProductCard from "../../common/goods/productCard";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
const ProductCardsList = ({ products }) => {
    const { pathname } = useLocation();
    return (
        <div className={styles.goods}>
            {products.map((product, index) => <Link to={`${pathname}/${product._id}`} key={index}><ProductCard product={product} /></Link>)}
        </div>
    );
};

ProductCardsList.propTypes = {
    products: PropTypes.array.isRequired
};
export default ProductCardsList;
