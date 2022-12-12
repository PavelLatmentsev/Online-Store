import React from "react";
import triangle from "../../assets/icons/navigation/triangle.png";
import PropTypes from "prop-types";
// import styles from "./goTopButton.module.scss";
const GoToTopButton = ({ label, className }) => {
    console.log(label, className);
    return (<div className={className}>
        {/* <div className={styles.buttonWrapper}> */}
        <p>{label}</p>
        <div>
            <img src={triangle} alt="triangle" />
        </div>
    </div>
        // </div>);
    );
};
GoToTopButton.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};
export default GoToTopButton;
