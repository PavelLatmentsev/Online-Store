import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    error,
    name,
    labelClassName,
    ClassName
}) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    const heandleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <div>
            <div >
                <label htmlFor={name} className={labelClassName}>
                    {label}
                </label>
                <select
                    className={ClassName}
                    id={name}
                    value={value}
                    name={name}
                    onChange={heandleChange}
                >
                    <option disabled value="">
                        {defaultOption}
                    </option>
                    {optionsArray &&
                        optionsArray.map((option) => (
                            <option
                                value={option.value}
                                key={option.value}
                            >
                                {option.name}
                            </option>
                        ))}
                </select>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    ClassName: PropTypes.string,
    labelClassName: PropTypes.string
};

export default SelectField;
