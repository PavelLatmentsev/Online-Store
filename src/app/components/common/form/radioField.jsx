import React from "react";
import PropTypes from "prop-types";
import styles from "./radioField.module.scss";
const RadioField = ({ options, value, onChange, name, label, error }) => {
    console.log(value);
    const heandleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div >
            <label className={styles.radioFeld_label}>{label}</label>
            <div className={styles.radioFeld}>
                {options.map((option) => (
                    <div className={styles.radioFeld_item}
                        key={option.name + "_" + option.value}
                    >
                        <input
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={heandleChange}
                        />

                        <label

                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>

                ))}

            </div>
            <div>{error && <div className={styles.radioFeld_error}>{error}</div>}</div>
        </div>
    );
};

RadioField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.string
};

export default RadioField;
