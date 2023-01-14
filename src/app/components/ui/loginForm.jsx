import React, { useState } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import styles from "./loginForm.module.scss";

const LoginForm = () => {
    const heandleSubmit = (e) => {
        e.prevent.default();
        console.log("heandleSubmit - loginForm");
    };
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const heandleChange = (target) => {
        if (target) {
            setData((prevState) => ({ ...prevState, [target.name]: target.value }));
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
                // error={errors.email}
            />
                    </div>
                    <div className={styles.loginForm_formgroupe}>
            <TextField
                type="password"
                label="Пароль"
                onChange={heandleChange}
                name="password"
                value={data.password}
                // error={errors.password}
            />
             </div>
             <div className={styles.loginForm_check}>
            <CheckBoxField value={data.stayOn} onChange={heandleChange} name="stayOn"><>Оставаться в системе</></CheckBoxField>
            </div>
            {/* {loginError && <p className="text-danger">{loginError}</p>} */}
            <div>
            <button className={styles.loginForm_btn}
                type="submit"
                // disabled={!isValidData}
            >
                Отправить
            </button>
            </div>

        </form>
    </div>);
};

export default LoginForm;
