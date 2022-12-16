import React from "react";
import styles from "./promocodeCard.module.scss";
import NavButton from "../../common/uniButton";
import PropTypes from "prop-types";

const PromocodeCard = ({ card }) => {
    console.log(card.url);
    return (
        <div className={styles.promocodeCard}>
            <div className={styles.flexImg_wrapper}>
                <img src={card.url} alt="picture" className={styles.promocodeCard_image} />
                <div className={styles.promocodeCard_titleWrapper}>
                    <h3 className={styles.promocodeCard_titleWrapper_header}>{card.header}</h3>
                    <p className={styles.promocodeCard_titleWrapper_description}>{card.title}</p>
                </div>
            </div>
            <div className={styles.flexBtn_wrapper}>
                <div className={styles.promocodeCard_btn}>
                    <NavButton fill="#F5F5F5" color="#BB8C5F" title=" Скопировать промокод" />
                </div>
            </div>
        </div>
    );
};
PromocodeCard.propTypes = {
    card: PropTypes.object.isRequired
};
export default PromocodeCard;
