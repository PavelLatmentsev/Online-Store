import React from "react";
import PropTypes from "prop-types";
import styles from "./commentList.module.scss";

import Comment from "./comment";
const CommentList = ({ comments }) => {
    return (<div className={styles.commentList}>
        {comments.map(comment => <Comment comment={comment} key={comment._id} />)}
    </div>);
};
CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};
export default CommentList;
