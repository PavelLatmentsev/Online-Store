import React from "react";
import styles from "./catalogCard.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CatalogCard = ({ catalogCard }) => {
    return (<Link to={catalogCard.path}><div className={styles.catalogCard}>
        <img src={catalogCard.url} className={styles.catalogCard_img} alt="catalogCard" />
        <p className={styles.catalogCard_title}>{catalogCard.name}</p>
    </div></Link>);
};
CatalogCard.propTypes = {
    catalogCard: PropTypes.object.isRequired
};
export default CatalogCard;
