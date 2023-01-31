import React from "react";
import _ from "lodash";
import styles from "./pagination.module.scss";
import PropTypes from "prop-types";
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage, onPrevChange, onNextChange, onStartChange, onEndChange }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount === 1 && currentPage !== 2) return null;
    const pageWay = _.range(1, pageCount + 1);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.paginatioWrapper}>
                    <button className={styles.paginationBtn} onClick={onStartChange} >start</button>
                    <button className={styles.paginationBtn} onClick={onPrevChange}>prev</button>
                    <nav>

                        <ul className={styles.pagination}>
                            {pageWay.map((page) => (
                                <li
                                    className={
                                        styles.pagination_item
                                    }
                                    key={"page_" + page}
                                >
                                    <button
                                        className={page === currentPage ? styles.pagination_btnActive : styles.pagination_btn}
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>

                    </nav>
                    <button className={styles.paginationBtn} onClick={onNextChange}>next</button>
                    <button className={styles.paginationBtn} onClick={onEndChange}>end</button>
                </div>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPrevChange: PropTypes.func.isRequired,
    onNextChange: PropTypes.func.isRequired,
    onStartChange: PropTypes.func.isRequired,
    onEndChange: PropTypes.func.isRequired
};

export default Pagination;
