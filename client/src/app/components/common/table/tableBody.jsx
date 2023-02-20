import React from "react";
import TableItem from "./tableItem";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const TableBody = ({ products, isBaseProdacts }) => {
    return (
        <tbody>
            {products.map((product, index) => (
                <TableItem product={product} key={isBaseProdacts ? product._id : nanoid() } index={index} isBaseProdacts={isBaseProdacts}/>
            ))}

        </tbody>
    );
};
TableBody.propTypes = {
    products: PropTypes.array.isRequired,
    isBaseProdacts: PropTypes.bool
};
export default TableBody;
