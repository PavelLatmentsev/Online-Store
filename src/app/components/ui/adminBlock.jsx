import React, { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import Footer from "../common/footer";
import HeaderMenu from "../common/headerMenu";
import styles from "./adminBlock.module.scss";
import Table from "../common/table/table";
import { nanoid } from "nanoid";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
const initialState = [{
    _id: nanoid(),
    name: "",
    price: 0,
    sales: 0,
    url: "",
    absent: false,
    hit: true,
    novelty: false,
    promotion: false,
    category: "",
    popular: false,
    brands: ""
}];
const AdminBlock = () => {
    const { products, count } = useProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;
    const lastPage = Math.ceil(count / pageSize);
    useEffect(() => {
        setCurrentPage(1);
    }, []);

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
                    <h1 className={styles.adminBlock_title}>Панель Администратора</h1>
                    <h1 className={styles.adminBlock_title}>Добавить новый Товар</h1>
                    <table>
                        <Table products={initialState} isBaseProdacts={false} />
                    </table>
                    {products ? (<div className={styles.adminBlock}>
                        <h1 className={styles.adminBlock_title}>База Товаров</h1>
                        <table>
                            <Table products={userCrop} isBaseProdacts={true} />
                        </table>
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
