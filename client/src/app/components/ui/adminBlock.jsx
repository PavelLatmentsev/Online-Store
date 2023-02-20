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
import Breadcrumps from "../common/breadcrumps";

const AdminBlock = () => {
    const { error, initialize, progress, status } = useMockData();
    const heandleClick = (params) => {
        initialize();
    };
    const users = useSelector(getUsersList());
    const countUser = users.length;
    const { products, count, defaultState } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageUser, setCurrentPageUSer] = useState(1);
    const pageSize = 20;
    const pageUserSize = 4;
    const lastUserPage = Math.ceil(countUser / pageUserSize);
    const lastPage = Math.ceil(count / pageSize);
    useEffect(() => {
        setCurrentPage(1);
        setCurrentPageUSer(1);
    }, []);

    useEffect(() => {
        if (count % 4 === 0) {
            setCurrentPageUSer(currentPageUser - 1);
        };
    }, [countUser]);
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
    const productsCrop = paginate(products, currentPage, pageSize);
    const usersCrop = paginate(users, currentPageUser, pageUserSize);
    const heandlerStartUsers = () => {
        setCurrentPageUSer(1);
    };
    const heandlerEndUsers = () => {
        setCurrentPageUSer(lastUserPage);
    };
    const heandlerPrevUsers = () => {
        if (currentPageUser === 1) {
            setCurrentPageUSer(lastUserPage);
        } else {
            setCurrentPageUSer(prevState => prevState - 1);
        }
    };
    const heandlerNextUsers = () => {
        if (currentPageUser === lastUserPage) {
            setCurrentPageUSer(1);
        } else {
            setCurrentPageUSer(prevState => prevState + 1);
        }
    };
    const heandlePageChangeUsers = (pageIndex) => {
        setCurrentPageUSer(pageIndex);
    };
    return (<div>
        <header>
            <HeaderMenu />
        </header>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.adminBlock}>
                <div className={styles.BreadCrumps}>
                <Breadcrumps/>
                </div>
                    <h1 className={styles.adminBlock_title}>Шалман Администратора</h1>
                    <h1 className={styles.adminBlock_title}>Список пользователей</h1>
                    <table>
                        <TableUsers users={usersCrop} />
                    </table>
                    <div className={styles.adminBlock_pagination}>
                            <Pagination
                                onPageChange={heandlePageChangeUsers}
                                pageSize={pageUserSize}
                                itemCount={countUser}
                                currentPage={currentPageUser}
                                onPrevChange={heandlerPrevUsers}
                                onNextChange={heandlerNextUsers}
                                onStartChange={heandlerStartUsers}
                                onEndChange={heandlerEndUsers}
                            />
                        </div>
                    <h1 className={styles.adminBlock_title}>Добавить товар</h1>
                    <table>
                        <Table products={defaultState} isBaseProdacts={false} />
                    </table>
                    {products ? (<div className={styles.adminBlock}>
                        <h1 className={styles.adminBlock_title}>База Товаров</h1>
                        <table>
                            <Table products={productsCrop} isBaseProdacts={true} />
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
