import React from "react";
import { useParams } from "react-router-dom";
import Order from "../components/ui/order";
import OrderInfo from "../components/ui/orderInfo";
const OrderLayouts = () => {
    const { numorder } = useParams();
    return (<div>
        {numorder ? <OrderInfo /> : <Order />}
    </div>);
};

export default OrderLayouts;
