import React from "react";
import PropTypes from "prop-types";
import TableUsersHeader from "./tableUsersHeader";
import TableUsersBody from "./tableUsersBody";

const TableUsers = ({ users }) => {
    return (
        <>
            <TableUsersHeader />
            <TableUsersBody users={users} />
        </>
    );
};
TableUsers.propTypes = {
    users: PropTypes.array.isRequired
};
export default TableUsers;
