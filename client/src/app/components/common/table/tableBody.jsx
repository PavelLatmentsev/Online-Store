import React from "react";
import TableItem from "./tableItem";
import PropTypes from "prop-types";

const TableBody = ({ products, isBaseProdacts }) => {
    return (
        <tbody>
            {products.map((product, index) => (
                <TableItem product={product} key={product._id} index={index} isBaseProdacts={isBaseProdacts} />
            ))}

        </tbody>
    );
};
TableBody.propTypes = {
    products: PropTypes.array.isRequired,
    isBaseProdacts: PropTypes.bool
};
export default TableBody;
