import React from "react";
import TableUsersItem from "./tableUsersItem";
import PropTypes from "prop-types";

const TableUsersBody = ({ users }) => {
    return (
        <tbody>
            {users.map((user, index) => (
                <TableUsersItem user={user} key={user._id } index={index}/>
            ))}

        </tbody>
    );
};
TableUsersBody.propTypes = {
    users: PropTypes.array.isRequired
};
export default TableUsersBody;
