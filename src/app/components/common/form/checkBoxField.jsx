import React from "react";
import PropTypes from "prop-types";
import styles from "./checkBoxField.module.scss";
const CheckBoxField = ({ name, value, onChange, children, error, className, labelClassName, disabled }) => {
    const heandleChange = () => {
        onChange({ name: name, value: !value });
    };
    const getInputClasses = () => {
        return `${className}` + (error ? "is-invalid" : "");
    };
    return (
        <div>
            <div className={styles.inputWrapper}>
                <input
                    className={getInputClasses()}
                    type="checkbox"
                    value=""
                    id={name}
                    onChange={heandleChange}
                    checked={value}
                    disabled={disabled}
                />
                <label className={labelClassName} htmlFor={name} >
                    {children}
                </label>

            </div>
            <div>
                {error && <div className={styles.inputWrapper_error}>{error}</div>}
            </div>
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
    labelClassName: PropTypes.string,
    disabled: PropTypes.bool
};
export default CheckBoxField;
