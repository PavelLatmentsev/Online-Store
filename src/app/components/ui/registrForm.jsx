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
        <TextField
                type="text"
                label="Имя"
                onChange={heandleChange}
                name="name"
                value={data.name}
                // error={errors.name}
            />
            <TextField
                type="text"
                label="Электронная Почта"
                onChange={heandleChange}
                name="email"
                value={data.email}
                // error={errors.email}
            />

            <TextField
                type="password"
                label="Пароль"
                onChange={heandleChange}
                name="password"
                value={data.password}
                // error={errors.password}
            />
            <RadioField
                name={"sex"}
                onChange={heandleChange}
                value={data.sex}
                options={[
                    { name: "Male", value: "Male" },
                    { name: "Female", value: "Female" },
                    { name: "Other", value: "Other" }
                ]}
                label="Выберете ваш пол"
            />

            <CheckBoxField
                value={data.licence}
                onChange={heandleChange}
                name="licence"
                // error={errors.licence}
            >
                <>
                    Подтвердить <a>лицензионное соглашение</a>
                </>
            </CheckBoxField>

            <button
                type="submit"
                // disabled={!isValidData}
            >
                Отправить
            </button>
        </form>
    </div>);
};
export default RegistrForm;
