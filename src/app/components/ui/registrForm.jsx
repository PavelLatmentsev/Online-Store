import React, { useState } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import styles from "./registrForm.module.scss";

const RegistrForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        sex: "male",
        licence: false
    });
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
        console.log("submit - registForm");
        // const isValid = validate();
        // if (!isValid) return;
        // const newData = { ...data, qualities: data.qualities.map((q) => q.value) };
        // dispatch(signUp(newData));
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
                // error={errors.name}
            />
            </div>
            <div className={styles.registrForm_formgroupe}>
            <TextField
                type="text"
                label="Электронная Почта"
                onChange={heandleChange}
                name="email"
                value={data.email}
                // error={errors.email}
            />
              </div>
            <div className={styles.registrForm_formgroupe}>
            <TextField
                type="password"
                label="Пароль"
                onChange={heandleChange}
                name="password"
                value={data.password}
                // error={errors.password}
            />
            </div>
            <div className={styles.registrForm_radio}>
            <RadioField
                name={"sex"}
                onChange={heandleChange}
                value={data.sex}
                options={[
                    { name: "Мужчина", value: "Male" },
                    { name: "Женщина", value: "Female" },
                    { name: "Другое", value: "Other" }
                ]}
                label="Выберете ваш пол"
            />
            </div>
            <div className={styles.registrForm_check}>
            <CheckBoxField
                value={data.licence}
                onChange={heandleChange}
                name="licence"
                // error={errors.licence}
            >
                <>
                    Подтвердить <a>лицензионное соглашение</a>
                </>
            </CheckBoxField >
            </div>
            <div >
            <button className={styles.registrForm_btn}
                type="submit"
                // disabled={!isValidData}
            >
                Отправить
            </button>
            </div>
        </form>
    </div>);
};
export default RegistrForm;
