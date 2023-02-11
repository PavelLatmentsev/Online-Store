import React from "react";
import styles from "./review.module.scss";
import inst from "../../../assets/icons/reviews/inst.png";
import border from "../../../assets/icons/reviews/border.png";
import PropTypes from "prop-types";

const Reviews = ({ review }) => {
  const { name, image, textContent } = review;
  return (
    <div className={styles.review_wrapperTop}>
      <img
        src={border}
        alt="border"
        className={styles.review_wrapperTop_bord}
      />
      <div className={styles.review_wrapperBottom}>
        <img
          src={border}
          alt="border"
          className={styles.review_wrapperBottom_bord}
        />
        <div className={styles.review}>
          <img src={image} alt="avatar" className={styles.review_avatar} />
          <p className={styles.review_comment}>{textContent}</p>
          <div className={styles.review_social}>
            <img src={inst} alt="inst" className={styles.review_inst} />
            <span className={styles.review_nick}>@{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  review: PropTypes.object.isRequired
};
export default Reviews;
