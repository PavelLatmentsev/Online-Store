import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import Footer from "../common/footer";
import HeaderMenu from "../common/headerMenu";
import styles from "./adminBlock.module.scss";
import Table from "../common/table/table";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import useMockData from "../../utils/mockData";
import TableUsers from "./table/tableUsers";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/users";

const AdminBlock = () => {
    const { error, initialize, progress, status } = useMockData();
    const heandleClick = (params) => {
        initialize();
    };
    const { products, count, defaultState } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;
    const lastPage = Math.ceil(count / pageSize);
    useEffect(() => {
        setCurrentPage(1);
    }, []);
    const users = useSelector(getUsersList());
    useEffect(() => {
        if (count % 20 === 0) {
            setCurrentPage(currentPage - 1);
        };
    }, [count]);
    const heandlerStartPaginationChange = () => {
        setCurrentPage(1);
    };
    const heandlerEndPaginationChange = () => {
        setCurrentPage(lastPage);
    };
    const heandlerPrevPaginationChange = () => {
        if (currentPage === 1) {
            setCurrentPage(lastPage);
        } else {
            setCurrentPage(prevState => prevState - 1);
        }
    };
    const heandlerNextPaginationChange = () => {
        if (currentPage === lastPage) {
            setCurrentPage(1);
        } else {
            setCurrentPage(prevState => prevState + 1);
        }
    };
    const heandlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const userCrop = paginate(products, currentPage, pageSize);
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.adminBlock}>
                    <h1 className={styles.adminBlock_title}>Шалман Администратора</h1>
                    <h1 className={styles.adminBlock_title}>Список пользователей</h1>
                    <table>
                        <TableUsers users={users} />
                    </table>
                    <h1 className={styles.adminBlock_title}>Добавить товар</h1>
                    <table>
                        <Table products={defaultState} isBaseProdacts={false} />
                    </table>
                    {products ? (<div className={styles.adminBlock}>
                        <h1 className={styles.adminBlock_title}>База Товаров</h1>
                        <table>
                            <Table products={userCrop} isBaseProdacts={true} />
                        </table>
                        <div className={styles.adminBlock_pagination}>
                            <Pagination
                                onPageChange={heandlePageChange}
                                pageSize={pageSize}
                                itemCount={count}
                                currentPage={currentPage}
                                onPrevChange={heandlerPrevPaginationChange}
                                onNextChange={heandlerNextPaginationChange}
                                onStartChange={heandlerStartPaginationChange}
                                onEndChange={heandlerEndPaginationChange}
                            />
                        </div>
                        <div className={styles.adminBlock_mockData}>
                            <h1>Main Page</h1>
                            <h3>Инициализация данных в FireBase</h3>
                            <ul>
                                <li>Status: {status}</li>
                                <li>Progress: {progress}</li>
                                {error && <li>error:{error}</li>}
                            </ul>
                            <button onClick={heandleClick} className={styles.adminBlock_mockData_btn}>
                                Инициализировать
                            </button>
                        </div>
                    </div>) : "Loading"}

                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
    </div>);
};

export default AdminBlock;
