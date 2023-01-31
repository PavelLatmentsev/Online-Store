import React from "react";
import Footer from "../../common/footer";
import HeaderMenu from "../../common/headerMenu";
import styles from "./contacts.module.scss";
const ContactsPage = () => {
  return (
    <div>
      <header>
        <HeaderMenu />
      </header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.contacts}>
            <h1 className={styles.contacts_title}>Контакты</h1>
            <h3 className={styles.contacts_titleInfo}>Офис компании</h3>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>);
};

export default ContactsPage;
