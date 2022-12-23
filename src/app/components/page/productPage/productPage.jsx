import React from "react";
import styles from "./productPage.module.scss";
const ProductPage = () => {
    return (<div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.productPage}>
                <div className={styles.productPage_headerBlock}>
                    <div className={styles.productPage_headerBlock_imnage}>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.productPage_headerBlock_description}>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default ProductPage;
