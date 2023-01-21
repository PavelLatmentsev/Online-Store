import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";
import Footer from "../common/footer";
import CheckBoxField from "../common/form/checkBoxField";
import RadioField from "../common/form/radioField";
import TextField from "../common/form/textField";
import HeaderMenu from "../common/headerMenu";
import styles from "./order.module.scss";
import { nanoid } from "nanoid";
import NavButton from "../common/uniButton";
import { validator } from "../../utils/validator";

import { addOrderToOrders, getCartItemsBox, getPromosale, getQuantityGoods, getTotalSum } from "../../store/cart";
const Order = () => {
    const currentUser = useSelector(getCurrentUserData());
    const contentOrder = useSelector(getCartItemsBox());
    const promoSale = useSelector(getPromosale());
    const totalSum = useSelector(getTotalSum());
    const sale = useSelector(getPromosale());
    const goods = useSelector(getCartItemsBox());
    const dispatch = useDispatch();
    const quantity = useSelector(getQuantityGoods());
    const [errors, setErrors] = useState({});
    const guestData = {
        name: "",
        phone: "",
        surname: "",
        email: "",
        delivery: "",
        payment: "",
        confirm: false,
        _id: nanoid(),
        sum: totalSum - promoSale,
        sale: promoSale,
        products: goods,
        totalQuantity: quantity
    };
    const registerUserData = currentUser ? {
        ...currentUser,
        phone: "",
        surname: "",
        delivery: "",
        payment: "",
        confirm: false,
        sum: totalSum - promoSale,
        sale: promoSale,
        products: goods,
        totalQuantity: quantity
    } : guestData;
    const [orderData, setOrderData] = useState(registerUserData);
    const heandleChange = (target) => {
        if (target) {
            setOrderData((prevState) => ({ ...prevState, [target.name]: target.value }));
        }
    };

    const validate = () => {
        const errors = validator(orderData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValidData = Object.keys(errors).length === 0;

    useEffect(() => {
        validate();
    }, [orderData]);

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
        surname: {
            isRequired: {
                message: "Фамилия обязательна для заполнения"
            },
            min: {
                message: "Фамилия должна состоять минимум из 3 символов",
                value: 3
            }
        },
        delivery: {
            isRequired: {
                message: "Укажите,пожалуйста, способ доставки "
            }
        },
        payment: {
            isRequired: {
                message: "Укажите,пожалуйста, способ оплаты "
            }
        },
        confirm: {
            isRequired: {
                message: "Пожалуйста, подтвердите правильность данных "
            }
        }
    };

    return (<div>
        <header><HeaderMenu /></header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.order}>
                    <div className={styles.order_content}>
                        <h1 className={styles.order_content_header}>Содержание заказа</h1>
                        <h1 className={styles.order_content_title}>Всего позиций: {contentOrder.length}</h1>
                        <ul className={styles.order_content_list}>
                            {contentOrder.map(contentItem => <li key={contentItem._id}>{contentItem.name} - {contentItem.price}Р </li>)}
                        </ul>
                        <h1 className={styles.order_content_title}>Итого c учетом всех скидок: {totalSum - sale}р</h1>
                    </div>
                    <h1 className={styles.order_title}>Оформление заказа</h1>
                    <div className={styles.order_recipient}>
                        <h1 className={styles.order_recipient_title}>1. Получатель</h1>
                        <div className={styles.order_person}>
                            <div className={styles.order_person_left}>
                                <div> <TextField label="Имя" name="name" value={orderData.name} onChange={heandleChange} type="text" error={errors.name} /></div>
                                <div> <TextField label="Телефон" name="phone" value={orderData.phone} onChange={heandleChange} type="text" placeholder="+7 9111111163" /></div>
                            </div>
                            <div className={styles.order_person_right}>
                                <div> <TextField label="Фамилия" name="surname" value={orderData.surname} onChange={heandleChange} type="text" error={errors.surname} /></div>
                                <div> <TextField label="Электронная почта" name="email" value={orderData.email} onChange={heandleChange} type="email" error={errors.email} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.order_waytoget}>
                        <h1 className={styles.order_waytoget_title}>2. Способ получения</h1>
                        <div className={styles.order_waytoget_choice}>
                            <RadioField label="Выберете способ оплаты?" name="delivery" value={orderData.delivery} onChange={heandleChange} error={errors.delivery}
                                options={[
                                    { name: "Самовывоз", value: "pickup" },
                                    { name: "Доставка", value: "delivery" }
                                ]} />
                        </div>

                    </div>
                    <div className={styles.order_timeToPay}>
                        <h1 className={styles.order_timeToPay_title}>3. Подтверждение и оплата</h1>
                        <div className={styles.order_timeToPay_choice}>

                            <RadioField label="Выбирете способ оплаты?" name="payment" value={orderData.payment} onChange={heandleChange} error={errors.payment}
                                options={[
                                    { name: "При получении", value: "recipient" },
                                    { name: "Картой онлайн", value: "online" },
                                    { name: "В кредит", value: "credit" },
                                    { name: "QR Code", value: "QRcode" }
                                ]} />
                        </div>
                        <h3 className={styles.order_timeToPay_confirm_title}>Согласие</h3>
                        <div className={styles.order_timeToPay_confirm}>
                            <p className={styles.order_timeToPay_confirm_passport}>При получении заказа необходимо показать паспорт или другой документ на указанное имя: {orderData.name}</p>
                            <CheckBoxField
                                value={orderData.confirm}
                                onChange={heandleChange}
                                name="confirm"
                                error={errors.confirm}
                            >
                                <>
                                    Данные получателя указаны верно*?
                                </>
                            </CheckBoxField >
                        </div>
                        <p className={styles.order_timeToPay_confirm_cunning}>Нажимая кнопку «Оформить заказ», я даю свое согласие на сбор и обработку моих персональных данных в соответствии с Политикой и принимаю условия Публичной оферты</p>
                    </div>
                </div>
                <div className={styles.order_button}>
                    <NavButton fill="#524336"
                        color="#FAF6F2"
                        title="Сформировать"
                        onChange={() => dispatch(addOrderToOrders(orderData))}
                        disabled={!isValidData} />
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div >);
};

export default Order;
