import React, { useState, useEffect } from "react";
import styles from "./subscriptionBlock.module.scss";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import NavButton from "../common/uniButton";
import GoToTopButton from "../common/goTopButton";
import Back from "../../assets/background/back.png";
import { validator } from "../../utils/validator";
const SubscriptionBlock = () => {
    const [subsriptionData, setSubscriptionData] = useState({
        email: "",
        name: "",
        license: false
    });
    const [errors, setErrors] = useState({});
    const heandleChange = (target) => {
        setSubscriptionData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const heandleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(isValid);
        // dispatch(signUp(newData));
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
        license: {
            isRequired: {
                message: "Лицензионное соглашение обязательно для заполнения"
            }
        }
    };

    const validate = () => {
        const errors = validator(subsriptionData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValidData = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
        getEmptyData(subsriptionData);
    }, [subsriptionData]);
const getEmptyData = (data) => {
   const newData = Object.values(data);
  for (const item of newData) {
    if (!item) {
        setErrors({});
    }
  }
};
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.subscriptionBlock}>
                <div className={styles.subscriptionBlock_form}>
                    <h1 className={styles.subscriptionBlock_formTitle}>Узнавайте первыми</h1>
                    <p className={styles.subscriptionBlock_formDescription}>Подпишитесь на новостную рассылку c самыми интересными новостями и акциями</p>
                    <div>
                        <form onSubmit={heandleSubmit}>
                            <TextField type="email"
                                name="email"
                                onChange={heandleChange}
                                value={subsriptionData.email}
                                className={styles.subscriptionBlock_formEmail}
                                labelClassName={styles.subscriptionBlock_labelEmail}
                                placeholder="Figur@mail.ru"
                                label="Эл. Почта"
                                error={errors.email}
                            />
                            <TextField type="text"
                                name="name"
                                onChange={heandleChange}
                                value={subsriptionData.name}
                                className={styles.subscriptionBlock_formName}
                                labelClassName={styles.subscriptionBlock_labelName}
                                placeholder="Введите имя"
                                label="Имя"
                                error={errors.name}
                            />
                            <CheckBoxField
                                className={styles.subscriptionBlock_formCheck}
                                type="checkbox"
                                value={subsriptionData.license}
                                name="license"
                                onChange={heandleChange}
                                labelClassName={styles.subscriptionBlock_formLabelCheck}
                                error={errors.license}
                            >
                                <>
                                    Вы соглашаетесь на обработку ваших персональных данных
                                </>
                            </CheckBoxField>
                            <div className={styles.subscriptionBlock_formButton}>
                                <NavButton fill="#524336" color="#FAF6F2" title="Подписаться" isValidData={isValidData} />
                            </div>

                        </form>
                    </div>

                </div>
                <div className={styles.subscriptionBlock_image}>
                    <img src={Back} alt="Back" className={styles.subscriptionBlock_image_picture} />
                    <div>
                        <a href="#part1"> <GoToTopButton label="Вернуться вверх" className={styles.subscriptionBlock_image_Btn} /></a>
                    </div>
                </div>

            </div>
        </div>
    </div>);
};

export default SubscriptionBlock;
