import React from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import styles from "./breadCrumbs.module.scss";
import { getTitleCrumps } from "../../utils/breadCrumpsTitle";
import PropTypes from "prop-types";
const Breadcrumbs = ({ product }) => {
  console.log("prod", product);
  const location = useLocation();
  const { pathname } = location;
  let currentLink = "";
  const crumbs = pathname.split("/").filter((crumb) => crumb);

  const filtredCumbs = crumbs.map((crumb, index) => {
      currentLink += `/${crumb}`;
      const isLast = index === crumbs.length - 1;
      return (
        <span key={crumb} className={isLast ? styles.crumbsActive : styles.crumbs}>
          <Link to={currentLink}>{getTitleCrumps(crumb.toLocaleLowerCase(), product)}</Link>
        </span>
      );
    });
  return (
    <>
      <Link to={"/"} className={styles.crumbs}>Главная</Link>
      <span>{filtredCumbs}</span>
    </>
  );
};

Breadcrumbs.propTypes = {
  product: PropTypes.object

};
export default withRouter(Breadcrumbs);
