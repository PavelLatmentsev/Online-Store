import { useEffect, useState } from "react";
import catalogs from "../mockData/catalogs.json";
import products from "../mockData/products.json";
import promocodes from "../mockData/promocodes.json";
import users from "../mockData/users.json";
import httpService from "../service/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In Process",
        successed: "Ready",
        error: "error occured"
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summuryCount = catalogs.length + products.length + promocodes.length + users.length;

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summuryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const catalog of catalogs) {
                await httpService.put("catalog/" + catalog._id, catalog);
                incrementCount();
            }
            for (const user of users) {
                await httpService.put("user/" + user._id, user);
                incrementCount();
            }
            for (const promocode of promocodes) {
                await httpService.put("promocode/" + promocode._id, promocode);
                incrementCount();
            }
            for (const product of products) {
                await httpService.put("product/" + product._id, product);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }
    return { error, initialize, progress, status };
};

export default useMockData;
