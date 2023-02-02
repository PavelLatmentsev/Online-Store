import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentOrders } from "../../store/cart";
import { getCurrentUserData, updateUser } from "../../store/users";
import Footer from "../common/footer";
import TextField from "../common/form/textField";
import HeaderMenu from "../common/headerMenu";
import styles from "./privateOffice.module.scss";
import upPicture from "../../assets/icons/navigation/up.png";
import downPicture from "../../assets/icons/navigation/down.png";
import call from "../../assets/icons/navigation/Callb.png";
import mail from "../../assets/icons/navigation/mailb.png";
import updateIcon from "../../assets/icons/navigation/update.png";
import editIcon from "../../assets/icons/navigation/edit.png";
import { useProducts } from "../../hooks/useProducts";

const PrivateOffice = () => {
    const currentUser = useSelector(getCurrentUserData());
    const { products } = useProducts();
    const [disabledItem, setDisabledItem] = useState(true);
    const dispatch = useDispatch();
    const initialState = {
        ...currentUser,
        phone: currentUser.phone ? currentUser.phone : "",
        city: currentUser.city ? currentUser.city : "",
        street: currentUser.street ? currentUser.street : "",
        office: currentUser.office ? currentUser.office : "",
        porch: currentUser.porch ? currentUser.porch : "",
        floor: currentUser.floor ? currentUser.floor : "",
        intercom: currentUser.intercom ? currentUser.intercom : "",
        surname: currentUser.surname ? currentUser.surname : "",
        patronymic: currentUser.patronymic ? currentUser.patronymic : ""

    };
    const [personalData, setPersonalData] = useState(initialState);
    const currentOrders = useSelector(getCurrentOrders(currentUser._id));
    const modernOrders = currentOrders.map(o => {
        const productStamp = o.products;
        const newArray = [];
        for (const stamp of productStamp) {
            for (const prod of products) {
                if (stamp._id === prod._id) {
                    newArray.push({ ...prod, quantity: stamp.quantity });
                }
            }
        }
        return { ...o, openOrder: false, products: newArray };
    });
    const [historyOrders, setHistoryOrders] = useState(modernOrders);
    console.log("historyOrders", historyOrders);
    const getDataOrder = (data) => {
        return new Intl.DateTimeFormat().format(data);
    };
    const heandleChange = (target) => {
        if (target) {
            setPersonalData((prevState) => ({ ...prevState, [target.name]: target.value }));
        }
    };
    const heandleOpenOrder = (id) => {
        const temp = historyOrders.map((item) => {
            if (item.orderId === id) {
                return { ...item, openOrder: !item.openOrder };
            }
            return item;
        });
        setHistoryOrders(temp);
    };
    const heandlerEditItem = () => {
        setDisabledItem(prevState => !prevState);
    };
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.office}>
                    <div className={styles.office_title}>
                        <h1 >Личный кабинет</h1>
                        <div>
                            <button onClick={heandlerEditItem} className={styles.tableItem_editBtn}><img src={editIcon} alt="editIcon" /></button>
                            {!disabledItem ? <button onClick={() => dispatch(updateUser(personalData))} className={styles.tableItem_updateBtn}><img src={updateIcon} alt="update" /></button> : null}
                        </div>
                    </div>

                    <div className={styles.office_recipientBlock}>
                        <h2 className={styles.office_header_title}>Информация о получателе</h2>
                        <div className={styles.office_recipientBlock_info}>
                            <div className={styles.office_recipientBlock_info_item_name}>
                                <TextField label="Имя" name="name" value={personalData.name} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_recipientBlock_info_item_phone}>
                                <TextField label="Телефон" name="phone" value={personalData.phone} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_recipientBlock_info_item_email}>
                                <TextField label="Эл.почта" name="email" value={personalData.email} onChange={heandleChange} type="email" disabled={disabledItem} />
                            </div>

                        </div>
                    </div>
                    <div className={styles.office_recipientBlock}>
                        <div className={styles.office_recipientBlock_info}>
                            <div className={styles.office_recipientBlock_info_item_surname}>
                                <TextField label="Фамилия" name="surname" value={personalData.surname} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_recipientBlock_info_item_patronymic}>
                                <TextField label="Отчество" name="patronymic" value={personalData.patronymic} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.office_adressBlock}>
                        <h2 className={styles.office_header_title}>Адрес Доставки</h2>

                        <div className={styles.office_adressBlock_info}>
                            <div className={styles.office_adressBlock_info_item_city}>
                                <TextField label="Город" name="city" value={personalData.city} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_adressBlock_info_item_street}>
                                <TextField label="Улица, пр..." name="street" value={personalData.street} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>

                        </div>
                        <div className={styles.office_adressBlock_info}>
                            <div className={styles.office_adressBlock_info_item_office}>
                                <TextField label="Квартира, офис" name="office" value={personalData.office} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div >
                            <div className={styles.office_adressBlock_info_item_porch}>
                                <TextField label="Подъезд" name="porch" value={personalData.porch} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_adressBlock_info_item_floor}>
                                <TextField label="Этаж" name="floor" value={personalData.floor} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>
                            <div className={styles.office_adressBlock_info_item_intercom}>
                                <TextField label="Домофон" name="intercom" value={personalData.intercom} onChange={heandleChange} type="text" disabled={disabledItem} />
                            </div>

                        </div>
                    </div>
                    <div className={styles.office_historyOrdersBlock}>
                        <h2 className={styles.office_historyOrdersBlock_title}>История заказов</h2>
                        {historyOrders.length ? historyOrders.map(order => (<div key={order.orderId} className={styles.office_historyOrdersBlock_wrapperItem}><div className={styles.office_historyOrdersBlock_wrapper} >
                            <div className={styles.office_historyOrdersBlock_container}>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title} >Дата</span>
                                    <span className={styles.office_historyOrdersBlock_container_item_content}>{getDataOrder(order.numData)}</span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Номер заказа</span>
                                    <span className={styles.office_historyOrdersBlock_container_item_content}>{order.numData}</span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Кол-во товара</span>
                                    <span className={styles.office_historyOrdersBlock_container_item_content}>{order.totalQuantity}</span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>На сумму</span>
                                    <span className={styles.office_historyOrdersBlock_container_item_content}>{order.sum}</span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <span className={styles.office_historyOrdersBlock_container_item_title}>Статус</span>
                                    <span className={styles.office_historyOrdersBlock_container_item_content}>Готов</span>
                                </div>
                                <div className={styles.office_historyOrdersBlock_container_item}>
                                    <button onClick={() => heandleOpenOrder(order.orderId)} className={styles.office_historyOrdersBlock_container_item_btn}><img src={order.openOrder ? downPicture : upPicture} alt="orderNavigate" /></button>
                                </div>
                            </div>
                        </div>
                            {order.openOrder ? (<div className={styles.office_historyOrdersBlock_currentOrdersInfo_wrapper}>
                                <div className={styles.office_historyOrdersBlock_currentOrdersInfo}>
                                    <div className={styles.office_historyOrdersBlock_currentOrdersInfo_item}>
                                        <h1 className={styles.office_historyOrdersBlock_title}>Информация о заказе</h1>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>Номер заказа</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{order.numData + " " + "от" + " " + getDataOrder(order.numData)} </span>
                                        </div>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>Адрес</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{"г. " + currentUser.city + ", ул. " + currentUser.street + ", д. " + currentUser.office + ", под. " + currentUser.porch + ", эт. " + currentUser.floor + ", код " + currentUser.intercom}</span>
                                        </div>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>Сумма заказа</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{order.sum} Скидка: {order.sale ? order.sale : "Отсутствует"}</span>
                                        </div>
                                    </div>
                                    <div className={styles.office_historyOrdersBlock_currentOrdersInfo_item}>
                                        <h1 className={styles.office_historyOrdersBlock_title}>Контактное лицо</h1>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>ФИО</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{currentUser.name + " " + currentUser.surname + " " + currentUser.patronymic || "Не указан "}</span>
                                        </div>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>Телефон</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{currentUser.phone || "Не указан "}</span>
                                        </div>
                                        <div className={styles.office_historyOrdersBlock_container_item}>
                                            <span className={styles.office_historyOrdersBlock_container_item_title}>Почта</span>
                                            <span className={styles.office_historyOrdersBlock_container_item_content}>{currentUser.email || "Не указан "}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.office_historyOrdersBlock_currentOrdersList}>
                                    <h1 className={styles.office_historyOrdersBlock_title}>Содержимое заказа</h1>
                                    {order.products.map(item => <div key={item._id}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Наименование</th>
                                                    <th>Цена</th>
                                                    <th>Количество</th>
                                                    <th>Стоимость</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><div className={styles.office_historyOrdersBlock_currentOrdersList_picture}><img src={item.url} alt="pic" /> {" "} {item.name}</div></td>
                                                    <td>{item.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{(Number(item.price) * Number(item.quantity)) - ((Number(item.price) * Number(item.quantity)) * Number(item.sales))}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>)}

                                </div>
                            </div>) : null}
                        </div>)) : <h1 className={styles.office_historyOrdersBlock_title}>Заказов нет</h1>}

                    </div>

                </div>
                <div className={styles.office_avatar}>
                    <div className={styles.office_avatar_wrapper}>
                        <div className={styles.office_avatar_pictureBlock}>
                            <div>
                                <img src={currentUser.image} alt="picture" />
                            </div>
                            <div className={styles.office_avatar_pictureBlock_userInfo}>
                                <div className={styles.office_avatar_pictureBlock_userInfo}>
                                    <span className={styles.office_avatar_pictureBlock_title}>Ваше имя</span>
                                    <span className={styles.office_avatar_pictureBlock_content}>{currentUser.name}</span>
                                </div>
                                <div className={styles.office_avatar_pictureBlock_userInfo}>
                                    <span className={styles.office_avatar_pictureBlock_content}>В сети</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.office_avatar_contacts}>
                            <div className={styles.office_avatar_contacts_item}>
                                <img src={call} alt="call" />
                                <span className={styles.office_avatar_pictureBlock_content}>{currentUser.phone || "Не указан"}</span>
                            </div>
                            <div className={styles.office_avatar_contacts_item}>
                                <img src={mail} alt="mail" />
                                <span className={styles.office_avatar_pictureBlock_content}>{currentUser.email || "Не указана"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer><Footer /></footer>
    </div >);
};

export default PrivateOffice;
