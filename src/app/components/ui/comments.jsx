import React from "react";
import AddComment from "../common/comments/addComment";
import CommentList from "../common/comments/commentList";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentUserData, getUsersLoadingStatus } from "../../store/users";
import { addComment, getCommentsByPageId } from "../../store/comments";
import { nanoid } from "nanoid";

const Comments = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const currentUserData = useSelector(getCurrentUserData());
    const commentsUser = useSelector(getCommentsByPageId(productId));
    console.log("commentsUser", commentsUser);
    console.log("productId", productId);
    // useEffect(() => {
    //     dispatch(loadCommentList(userID));
    // }, [userID]);
    const isLoading = useSelector(getUsersLoadingStatus());

    const handleSubmit = (commentData) => {
        dispatch(addComment({ ...commentData, pageId: productId, userId: currentUserData._id, created_at: Date.now(), _id: nanoid() }));
    };
    const heandleRemove = (id) => {
        console.log(id);
        // dispatch(removeComment(id));
        // commentsUser.filter(comment => comment._id !== id);
    };
    const sortArray = _.orderBy(commentsUser, ["created_at"], ["desc"]);
    return (
        <div>
            <div >
                <div >
                    <AddComment onSubmit={handleSubmit} />
                </div>
            </div>
            {sortArray.length > 0 && (!isLoading ? < CommentList comments={sortArray} onRemove={heandleRemove} /> : "Loading")}

        </div>
    );
};

export default Comments;
