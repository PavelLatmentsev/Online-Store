import React from "react";
import PropTypes from "prop-types";
import styles from "./checkBoxField.module.scss";
const CheckBoxField = ({ name, value, onChange, children, error, className, labelClassName }) => {
    const heandleChange = () => {
        onChange({ name: name, value: !value });
    };
    const getInputClasses = () => {
        return `${className}` + (error ? "is-invalid" : "");
    };
    return (
        <div className={styles.inputWrapper}>
                        <input
                className={getInputClasses()}
                type="checkbox"
                value=""
                id={name}
                onChange={heandleChange}
                checked={value}
            />
            <label className={labelClassName} htmlFor={name} >
                {children}
            </label>

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckBoxField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    error: PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string
};
export default CheckBoxField;
