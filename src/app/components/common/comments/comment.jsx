import React from "react";
import styles from "./comment.module.scss";
import PropTypes from "prop-types";
const Comment = ({ comment }) => {
    return (<div className={styles.comment}>

        <div className={styles.comment_content}>
            <div className={styles.comment_personalCommentInfo}>
                <div className={styles.comment_imageBlock}>
                    <div>
                        <img src={comment.image} alt="avatar" />
                    </div>
                    <span>{comment.name}</span>
                </div>
                <span>Time Comment</span>
            </div>
            <div className={styles.comment_content_description}>
                <p className={styles.comment_content_descriptionBox}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, iste? Unde vero fugit reiciendis. Dignissimos quibusdam facilis odio repellendus eos vero, ut obcaecati hic esse dolorum excepturi est id fugiat!
                    Autem, facere. Temporibus cum nostrum officiis aspernatur molestiae ratione. Debitis ut quidem dolore eum aliquid beatae reprehenderit velit vitae veritatis! Molestiae error eligendi distinctio rem delectus cum nemo possimus quaerat.
                    Architecto numquam enim quibusdam, temporibus ab molestias dolor sit corrupti quaerat, eos itaque perferendis, quam laudantium aliquam quos. Soluta fugit quas itaque voluptatum temporibus eveniet ut architecto? Ea, deleniti libero.
                </p>
            </div>
        </div>
    </div>);
};
Comment.propTypes = {
    comment: PropTypes.object
};
export default Comment;
