import React from "react";
import styles from "./seeInCatalogBtn.module.scss";
import divider from "../../assets/icons/navigation/DevideLogo.png";
import PropTypes from "prop-types";

const SeeInCatalogBtn = ({ title, onClick }) => {
    return (<div className={styles.SeeInCatalogBtn}>
        <button className={styles.SeeInCatalogBtn_btn} onClick={onClick}>
            <p className={styles.SeeInCatalogBtn_description}>{title}</p>
            <img src={divider} alt="divider" className={styles.SeeInCatalogBtn_image} />
        </button>
    </div>);
};
SeeInCatalogBtn.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
export default SeeInCatalogBtn;
