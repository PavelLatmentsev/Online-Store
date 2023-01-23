import React from "react";
import styles from "./filterButton.module.scss";
import PropTypes from "prop-types";

const FilterButton = ({ background, color, title, onChange, id }) => {
    return (<div>
        <button id={id} onClick={() => onChange(id)} className={styles.filterButton} style={{ color: `${color}`, background: `${background}` }}>{title}</button>
    </div>);
};
FilterButton.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    id: PropTypes.string
};
export default FilterButton;
