import React, { useEffect, useState } from "react";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./contacts.module.scss";
import call from "../../../assets/icons/navigation/Callb.png";
import mail from "../../../assets/icons/navigation/mailb.png";
import ManagerCard from "../../common/managerCard";
import { useSelector } from "react-redux";
import Loader from "../../common/loader";
import { getManagerList } from "../../../store/manager";
const ContactsPage = () => {
  const managersList = useSelector(getManagerList());
  console.log("managersList", managersList);
  const [managers, setManagers] = useState(managersList);
  const randomManager = managers[Math.floor(Math.random() * managers.length)];
  useEffect(() => {
    setManagers(managersList);
  }, [managersList]);

  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {managersList ? (
            <div className={styles.contacts}>
              <h1 className={styles.contacts_title}>Контакты</h1>
              <h3 className={styles.contacts_titleInfo}>Офис компании</h3>
              <div className={styles.contacts_info}>
                <div className={styles.contacts_info_title}>
                  <h1 className={styles.contacts_info_title_phone}>
                    8(800)600-61-91
                  </h1>
                  <p className={styles.contacts_info_title_time}>
                    Понедельник – пятница: с 07:00 до 15:00 (МСК)
                  </p>
                  <p className={styles.contacts_info_title_time}>
                    Звонок бесплатный!
                  </p>
                  <p className={styles.contacts_info_title_social}>
                    <span className={styles.contacts_info_title_socialHeader}>
                      Telegram:
                    </span>{" "}
                    tattoo28_bot
                  </p>
                  <p className={styles.contacts_info_title_social}>
                    <span className={styles.contacts_info_title_socialHeader}>
                      Skype:
                    </span>
                    tattoo28_bot
                  </p>
                  <p className={styles.contacts_info_title_description}>
                    Ваши заказы, звонки и обращения обрабатываются в рабочее
                    время. Если Вы обратитесь <br /> к нам в иное время - мы
                    свяжемся с Вами на следующий день. Мы обращаем внимание,{" "}
                    <br /> в каком часовом поясе Вы находитесь, и не звоним в
                    неудобное для Вас время.
                  </p>
                  <p className={styles.contacts_info_title_delivery}>
                    Пункт выдачи в г. Волгограде, Калинина 107-202, стоимость
                    доставки 300 руб.,
                    <br /> при оформлении заказа до 15.00 доставка в день
                    заказа.
                  </p>
                  <p className={styles.contacts_info_title_delivery_info}>
                    ООО «Посылка»
                  </p>
                  <p className={styles.contacts_info_title_delivery_info}>
                    ОГРН: 1192036006645
                  </p>
                </div>
                <div className={styles.contacts_info_manager}>
                  <div className={styles.contacts_info_managerWrapper}>
                    <div className={styles.contacts_info_manager_description}>
                      <div
                        className={styles.contacts_info_manager_description_img}
                      >
                        <img src={randomManager.image} alt="image" />
                      </div>
                      <div
                        className={
                          styles.contacts_info_manager_description_info
                        }
                      >
                        <p>Тех поддержка</p>
                        <p
                          className={
                            styles.contacts_info_manager_description_infoName
                          }
                        >
                       {randomManager.name}
                        </p>
                      </div>
                    </div>
                    <div className={styles.contacts_info_manager_contacts}>
                      <div
                        className={
                          styles.contacts_info_manager_contacts_contactsWraper
                        }
                      >
                        <img src={call} alt="call" />
                        <span
                          className={
                            styles.contacts_info_manager_contacts_phone
                          }
                        >
                          {randomManager.phone}
                        </span>
                      </div>
                      <div
                        className={
                          styles.contacts_info_manager_contacts_socialWrapper
                        }
                      >
                        <span
                          className={
                            styles.contacts_info_manager_contacts_social
                          }
                        >
                          Viber
                        </span>
                        <span
                          className={
                            styles.contacts_info_manager_contacts_social
                          }
                        >
                          Whats App
                        </span>
                        <span
                          className={
                            styles.contacts_info_manager_contacts_social
                          }
                        >
                          Telegram
                        </span>
                      </div>
                      <div
                        className={
                          styles.contacts_info_manager_contacts_socialWrapper
                        }
                      >
                        <img src={mail} alt="mail" />
                        <span
                          className={styles.contacts_info_manager_contacts_mail}
                        >
                         {randomManager.email}
                        </span>
                      </div>
                      <p
                        className={
                          styles.contacts_info_manager_contacts_helpInfo
                        }
                      >
                        Обратитесь в нашу поддержку, если у Вас возникли
                        какие-либо вопросы по Вашему заказу, либо Вы не можете
                        собрать и настроить Ваше тату-оборудование. Мы поможем.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
               <div>
                <h1 className={styles.contacts_info_managersList_title}>Наше месторасположение</h1>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad780e1c1dae5e0ef5dc5bfc18250a4e008169d9e75bc3d40414b34976d0230bd&amp;source=constructor" width="1220" height="600" frameBorder="0"></iframe>
               </div>
              <h1 className={styles.contacts_info_managersList_title}>
                Менеджеры
              </h1>
              <div className={styles.contacts_info_managersList}>
                {managers.map((item) => (
                  <ManagerCard key={item._id} user={item} />
                ))}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ContactsPage;
