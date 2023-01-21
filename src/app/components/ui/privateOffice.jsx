import React, { useState } from "react";
import Footer from "../common/footer";
import TextField from "../common/form/textField";
import HeaderMenu from "../common/headerMenu";
import styles from "./privateOffice.module.scss";

const PrivateOffice = () => {
    const [personalData, setPersonalData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        street: "",
        office: "",
        porch: "",
        floor: "",
        intercom: ""

    });
    console.log(personalData);
    const heandleChange = (target) => {
        if (target) {
            setPersonalData((prevState) => ({ ...prevState, [target.name]: target.value }));
        }
    };
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.office}>
                    <h1 className={styles.office_title}>Личный кабинет</h1>
                    <div className={styles.office_recipientBlock}>
                        <h2 className={styles.office_header_title}>Информация о получателе</h2>
                        <div className={styles.office_recipientBlock_info}>
                            <div className={styles.office_recipientBlock_info_item_name}>
                                <TextField label="ФИО" name="name" value={personalData.name} onChange={heandleChange} type="text" />
                            </div>
                            <div className={styles.office_recipientBlock_info_item_phone}>
                                <TextField label="Телефон" name="phone" value={personalData.phone} onChange={heandleChange} type="text" />
                            </div>
                            <div className={styles.office_recipientBlock_info_item_email}>
                                <TextField label="Эл.почта" name="email" value={personalData.email} onChange={heandleChange} type="email" />
                            </div>

                        </div>
                    </div>

                    <div className={styles.office_adressBlock}>
                        <h2 className={styles.office_header_title}>Адрес Доставки</h2>

                        <div className={styles.office_adressBlock_info}>
                            <div className={styles.office_adressBlock_info_item_city}>
                                <TextField label="Город" name="city" value={personalData.city} onChange={heandleChange} type="text" />
                            </div>
                            <div className={styles.office_adressBlock_info_item_street}>
                                <TextField label="Улица, дом" name="street" value={personalData.street} onChange={heandleChange} type="text" />
                            </div>

                        </div>
                        <div className={styles.office_adressBlock_info}>
                            <div className={styles.office_adressBlock_info_item_office}>
                                <TextField label="Квартира, офис" name="office" value={personalData.office} onChange={heandleChange} type="text" />
                            </div >
                            <div className={styles.office_adressBlock_info_item_porch}>
                                <TextField label="Подъезд" name="porch" value={personalData.porch} onChange={heandleChange} type="text" />
                            </div>
                            <div className={styles.office_adressBlock_info_item_floor}>
                                <TextField label="Этаж" name="floor" value={personalData.floor} onChange={heandleChange} type="text" />
                            </div>
                            <div className={styles.office_adressBlock_info_item_intercom}>
                                <TextField label="Домофон" name="intercom" value={personalData.intercom} onChange={heandleChange} type="text" />
                            </div>

                        </div>
                    </div>
                    <div className={styles.office_historyOrdersBlock}>
                        <h2 className={styles.office_historyOrdersBlock_title}>История заказов</h2>
                        <div className={styles.office_historyOrdersBlock_wrapper}>
                            <div className={styles.office_historyOrdersBlock_container}>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title} >Дата</span>
                                    <span></span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Номер заказа</span>
                                    <span></span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Кол-во товара</span>
                                    <span></span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>На сумму</span>
                                    <span></span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Статус</span>
                                    <span></span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <footer><Footer /></footer>
    </div>);
};

export default PrivateOffice;
