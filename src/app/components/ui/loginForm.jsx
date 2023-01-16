import React, { useState, useEffect } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import styles from "./loginForm.module.scss";
import { validator } from "../../utils/validator";

const LoginForm = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const heandleChange = (target) => {
        if (target) {
            setData((prevState) => ({ ...prevState, [target.name]: target.value }));
        }
    };
    const heandleSubmit = (e) => {
        e.prevent.default();
        const isValid = validate();
        if (!isValid) return;
        console.log(isValid);
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не корректно" }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },

            isCapitalSymbol: {
                message: "Пароль должен содержать заглавную букву"
            },

            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValidData = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [data]);

    return (<div className={styles.loginForm}>
        <form onSubmit={heandleSubmit}>
            <div className={styles.loginForm_formgroupe}>
                <TextField
                    type="text"
                    label="Электронная Почта"
                    onChange={heandleChange}
                    name="email"
                    value={data.email}
                    error={errors.email}
                />
            </div>
            <div className={styles.loginForm_formgroupe}>
                <TextField
                    type="password"
                    label="Пароль"
                    onChange={heandleChange}
                    name="password"
                    value={data.password}
                    error={errors.password}
                />
            </div>
            <div className={styles.loginForm_check}>
                <CheckBoxField value={data.stayOn} onChange={heandleChange} name="stayOn"><>Оставаться в системе</></CheckBoxField>
            </div>
            {/* {loginError && <p className="text-danger">{loginError}</p>} */}
            {/* {errors && <p >Ошибка</p>} */}
            <div>
                <button className={styles.loginForm_btn}
                    type="submit"
                    disabled={!isValidData}
                >
                    Отправить
                </button>
            </div>

        </form>
    </div>);
};

export default LoginForm;
