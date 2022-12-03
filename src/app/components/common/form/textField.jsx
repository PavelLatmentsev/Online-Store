import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, onChange, error, value, className, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const heandleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={heandleChange}
          className={className}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toogleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextField;
