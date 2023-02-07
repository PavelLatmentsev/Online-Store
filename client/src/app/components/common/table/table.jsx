import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ products, isBaseProdacts }) => {
    return (
        <>
            <TableHeader isBaseProdacts={isBaseProdacts}/>
            <TableBody products={products} isBaseProdacts={isBaseProdacts} />
        </>
    );
};
Table.propTypes = {
    products: PropTypes.array.isRequired,
    isBaseProdacts: PropTypes.bool
};
export default Table;
