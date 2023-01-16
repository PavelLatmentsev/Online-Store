import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./textField.module.scss";

const TextField = ({ label, type, name, onChange, error, value, className, placeholder, labelClassName, onKeyDown, disabled }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const heandleChange = ({ target }) => {
    console.log("textField", target);
    if (target.name === "priceFieldMin" || target.name === "priceFieldMax" || target.name === "price") {
      const value = target.value;
      target.value = value.replace(/\D/g, "");
    }
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.textField}>
      <label htmlFor={name} className={labelClassName}>{label}</label>
      <div>
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={heandleChange}
          className={className}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={toogleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className={styles.textField_error}>{error}</div>}
      </div>
    </div>
  );
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string,
  textFieldClassName: PropTypes.string,
  onKeyDown: PropTypes.func,
  isValid: PropTypes.bool,
  disabled: PropTypes.bool
};

export default TextField;
