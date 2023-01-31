import React from "react";
import styles from "./review.module.scss";
import avatar from "../../../assets/icons/reviews/comment.png";
import inst from "../../../assets/icons/reviews/inst.png";
import border from "../../../assets/icons/reviews/border.png";
const Reviews = () => {
    return (
        <div className={styles.review_wrapperTop}>
            <img src={border} alt="border" className={styles.review_wrapperTop_bord} />
            <div className={styles.review_wrapperBottom}>
                <img src={border} alt="border" className={styles.review_wrapperBottom_bord} />
                <div className={styles.review}>
                    <img src={avatar} alt="avatar" className={styles.review_avatar} />
                    <p className={styles.review_comment}>Заказал первый раз, заказ пришёл во время, упаковано все отлично, все заказанное соответствует описанию, но есть один маленький ньюанс, коробки все мятые, толи при упаковке так случилось толи на складе так отномятся с товаром, в целом всем доволен, буду заказывать ещё, сайт-магазин рекомендую к покупкам, в целом всем доволен, буду заказывать ещё</p>
                    <div className={styles.review_social}>
                        <img src={inst} alt="inst" className={styles.review_inst} />
                        <span className={styles.review_nick}>@Velli7350</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
