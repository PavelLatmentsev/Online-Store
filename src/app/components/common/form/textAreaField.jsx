import React from "react";
import PropTypes from "prop-types";
import styles from "./textAreaField.module.scss";
const TextAreaField = ({ onChange, label, name, value, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div >
            <label htmlFor={name}> {label}</label>
            <div >
                <textarea
                    className={styles.textAriaField}
                    id={name}
                    rows="5"
                    cols="100"
                    onChange={handleChange}
                    value={value}
                    name={name}
                />
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};
TextAreaField.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.object
};
export default TextAreaField;
