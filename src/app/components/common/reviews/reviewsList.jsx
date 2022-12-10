import React from "react";
import styles from "./reviewsList.module.scss";
import Reviews from "./review";
const ReviewsList = () => {
    return (
        <div className={styles.reviews_wrapper}>
            <div className={styles.container}>
                <div className={styles.reviews}>
                    <div className={styles.reviewsTitle}>
                        <h1 className={styles.reviewsTitle_item}>Отзывы</h1>
                    </div>
                    <div className={styles.reviewsItems}>
                        <div className={styles.reviewsBox_leftItem}>
                            <Reviews />
                        </div>
                        <div className={styles.reviewsBox_rightItem}>
                            <Reviews />
                        </div >
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewsList;
