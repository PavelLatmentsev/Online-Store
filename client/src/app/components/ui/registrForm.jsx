import React, { useState, useEffect } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import styles from "./registrForm.module.scss";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const RegistrForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        sex: "",
        licence: false
    });
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValidData = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [data]);

    const heandleChange = (target) => {
        if (target) {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };
    const heandleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp({ ...data, image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1).toString(36).substring(7)}.svg` }));
    };
    const validatorConfig = {

        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не корректно" }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
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
        },
        licence: {
            isRequired: {
                message: "Лицензионное соглашение обязательня для заполнения"
            }
        },
        sex: {
            isRequired: {
                message: "Пол обязателен для заполнения"
            }
        }
    };

    return (<div className={styles.registrForm}>
        <form onSubmit={heandleSubmit}>
            <div className={styles.registrForm_formgroupe}>
                <TextField
                    type="text"
                    label="Имя"
                    onChange={heandleChange}
                    name="name"
                    value={data.name}
                    error={errors.name}
                />
            </div>
            <div className={styles.registrForm_formgroupe}>
                <TextField
                    type="text"
                    label="Электронная Почта"
                    onChange={heandleChange}
                    name="email"
                    value={data.email}
                    error={errors.email}
                />
            </div>
            <div className={styles.registrForm_formgroupe}>
                <TextField
                    type="password"
                    label="Пароль"
                    onChange={heandleChange}
                    name="password"
                    value={data.password}
                    error={errors.password}
                />
            </div>
            <div className={styles.registrForm_radio}>
                <RadioField
                    name="sex"
                    onChange={heandleChange}
                    value={data.sex}
                    options={[
                        { name: "Мужчина", value: "Male" },
                        { name: "Женщина", value: "Female" },
                        { name: "Другое", value: "Other" }
                    ]}
                    label="Выберете ваш пол"
                    error={errors.sex}
                />
            </div>
            <div className={styles.registrForm_check}>
                <CheckBoxField
                    value={data.licence}
                    onChange={heandleChange}
                    name="licence"
                    error={errors.licence}
                >
                    <>
                        Подтвердить <a>лицензионное соглашение</a>
                    </>
                </CheckBoxField >
            </div>
            <div >
                <button className={styles.registrForm_btn}
                    type="submit"
                    disabled={!isValidData}
                >
                    Отправить
                </button>
            </div>
        </form>
    </div>);
};
export default RegistrForm;
