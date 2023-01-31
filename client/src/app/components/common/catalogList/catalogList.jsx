import React from "react";
import styles from "./catalogList.module.scss";
import CatalogCard from "./catalogCard";
import PropTypes from "prop-types";
const CatalogList = ({ catalogList }) => {
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.catalogList}>
                {catalogList.map((catalog) => <CatalogCard catalogCard={catalog} key={catalog._id} />)}
            </div>
        </div>
    </div>);
};
CatalogList.propTypes = {
    catalogList: PropTypes.array.isRequired
};
export default CatalogList;
