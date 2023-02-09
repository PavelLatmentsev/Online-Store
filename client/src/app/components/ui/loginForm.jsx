import React, { useState, useEffect } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import styles from "./loginForm.module.scss";
import { validator } from "../../utils/validator";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthError, signIn } from "../../store/users";

const LoginForm = () => {
    const [errors, setErrors] = useState({});
    const loginError = useSelector(getAuthError());
    const history = useHistory();
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const heandleChange = (target) => {
        if (target) {
            setData((prevState) => ({ ...prevState, [target.name]: target.value }));
        }
    };
    const heandleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";
        dispatch(signIn({ payload: data, redirect }));
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
        getEmptyData(data);
    }, [data]);
const getEmptyData = (data) => {
   const newData = Object.values(data);
  for (const item of newData) {
    if (!item) {
        setErrors({});
    }
  }
};

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
            {loginError && <p >{loginError}</p>}
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
