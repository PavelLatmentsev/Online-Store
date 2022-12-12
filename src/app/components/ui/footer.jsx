import React from "react";
import styles from "./footer.module.scss";
import NavBar from "./navBar";
import DevideLogo from "../../assets/icons/navigation/DevideLogo.png";
import Call from "../../assets/icons/navigation/Call.png";
import Mail from "../../assets/icons/navigation/Mail.png";
import Telegram from "../../assets/icons/navigation/Telegram.png";
import Viber from "../../assets/icons/navigation/Viber.png";
import Wsp from "../../assets/icons/navigation/wsp.png";
// import devfoot from "../../assets/icons/navigation/dividersfooter.png";
const Footer = () => {
    return (<div className={styles.wrapper}>
        <div className={styles.wrapperFooter}>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.footer_Left}>
                        <div>
                            <div>
                                <div className={styles.footer_logo}>
                                    {" "}
                                    <div className={styles.footer_logo_name}>MR. DRISKELL</div>
                                    <div>
                                        <img src={DevideLogo} alt="DevideLogo" className={styles.footer_logo_divider} />
                                    </div>
                                    <div className={styles.footer_logo_shop}>TATTOO SHOP</div>
                                </div>
                            </div>
                            <div className={styles.footer_confidentiality}><a href="#">Политика конфенедциальности</a></div>
                        </div>

                    </div>
                    <div className={styles.footer_middle}>
                        <div className={styles.footer_middle_navBar}>
                            <NavBar />
                        </div>
                    </div>
                    <div className={styles.footer_Right}>
                        <div className={styles.footer_Right_call}>
                            <div className={styles.footer_Right_phone}>
                                <img src={Call} alt="Call" />
                                <span className={styles.footer_Right_phoneNumber}>8 800 600-61-91</span>
                            </div>
                            <div className={styles.footer_Right_social}>
                                <img src={Telegram} alt="Telegram" />
                                <img src={Viber} alt="Viber" />
                                <img src={Wsp} alt="Wsp" />
                            </div>

                        </div>
                        <div className={styles.footer_Right_time}><p>Время работы: c 9:00 до 20:00 по мск</p></div>
                        <div className={styles.footer_Right_mail}>
                            <img src={Mail} alt="Mail" />
                            <span className={styles.footer_Right_mail_adress}>Mr.Driskell@mail.ru</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>);
};

export default Footer;
