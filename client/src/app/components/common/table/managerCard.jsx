import React from "react";
import styles from "./managerCard.module.scss";
import PropTypes from "prop-types";
import call from "../../../assets/icons/navigation/Callb.png";
import mail from "../../../assets/icons/navigation/mailb.png";
const ManagerCard = ({ user }) => {
  return (<div className={styles.wrapper}>
  <div className={styles.managerCard}>
     <div className={styles.managerCard_avatar}>
        <img src={user.image} alt="avatar" />
     </div>
     <div className={styles.managerCard_info_picture}>
        <div className={styles.managerCard_info}>
            <img src={call} alt="call" /><span className={styles.managerCard_info_phone}>{user.phone}</span>
        </div>
        <div className={styles.managerCard_info_social}>
        <a href="https://www.viber.com/ru/" target = "_blank" rel="noreferrer"
                        className={styles.managerCard_social}
                      >
                        Viber
                      </a>
                      <a href="https://www.whatsapp.com/?lang=ru" target = "_blank" rel="noreferrer"
                       className={styles.managerCard_social}
                      >
                        Whats App
                      </a>
                      <a href="https://web.telegram.org/" target = "_blank" rel="noreferrer"
                            className={styles.managerCard_social}
                      >
                        Telegram
                      </a>
        </div>
        <div className={styles.managerCard_info_mail}>
        <img src={mail} alt="mail" />
                      <a href={"mailto:" + user.email}
                          className={styles.managerCard_mail}
                      >
                       {user.email}
                      </a>
        </div>
     </div>

  </div>
  <p className={styles.managerCard_info_name}>{user.name}</p>
  </div>);
};
ManagerCard.propTypes = {
  user: PropTypes.object.isRequired
};
export default ManagerCard;
