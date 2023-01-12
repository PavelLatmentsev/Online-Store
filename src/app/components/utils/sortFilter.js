import _ from "lodash";
export const sortedGoods = (userData, array) => {
    const priceMin = Number(userData.priceFieldMin);
    const priceMax = Number(userData.priceFieldMax);
    let sortGoods = array;
    // Все 4 параметра фильтрации
    if (priceMax && priceMin && userData.inStock && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && priceMin && userData.inStock && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && priceMin && userData.inStock && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && priceMin && userData.inStock && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.inStock && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && userData.inStock && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && userData.inStock && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && userData.inStock && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.inStock && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && userData.inStock && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && userData.inStock && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && userData.inStock && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && priceMax && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && priceMax && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && priceMax && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMin && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMin && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMin && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (priceMax && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (priceMax && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (priceMax && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (userData.inStock && userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (userData.inStock && userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (userData.inStock && userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (userData.inStock && userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => !item.absent && item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && priceMin && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.price <= priceMax && item.brands === userData.brands);
    } else if (priceMin && userData.brands) {
      sortGoods = array.filter((item) => priceMin <= item.price && item.brands === userData.brands);
    } else if (priceMax && userData.brands) {
      sortGoods = array.filter((item) => item.price <= priceMax && item.brands === userData.brands);
    } else if (userData.sort === "priceUP" && userData.brands) {
      sortGoods = array.filter((item) => item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else
    if (userData.sort === "priceDown" && userData.brands) {
      sortGoods = array.filter((item) => item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else
    if (userData.sort === "name" && userData.brands) {
      sortGoods = array.filter((item) => item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else
    if (userData.sort === "sale" && userData.brands) {
      sortGoods = array.filter((item) => item.brands === userData.brands);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && priceMin && userData.inStock && userData.sort === "name") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["name"], ["desc"]);
      } else
      if (priceMax && priceMin && userData.inStock && userData.sort === "sale") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
      } else
    if (priceMax && priceMin && userData.inStock && userData.sort === "priceUP") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
      } else
    if (priceMax && priceMin && userData.inStock && userData.sort === "priceDown") {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
        sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
      } else
     if (priceMax && priceMin && userData.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price && item.price <= priceMax);
      } else
    if (priceMin && priceMax && userData.sort === "sale") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "name") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && priceMax && userData.sort === "priceUP") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && priceMax && userData.sort === "priceDown") {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (userData.brands && userData.inStock) {
      sortGoods = array.filter((item) => item.brands === userData.brands && !item.absent);
    } else if (userData.inStock && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (userData.inStock && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (userData.inStock && userData.sort === "name") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (userData.inStock && userData.sort === "sale") {
      sortGoods = array.filter((item) => !item.absent);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.inStock) {
      sortGoods = array.filter((item) => !item.absent && item.price <= priceMax);
    } else if (priceMin && userData.inStock) {
        sortGoods = array.filter((item) => !item.absent && priceMin <= item.price);
      } else if (priceMax && userData.sort === "sale") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMax && userData.sort === "name") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMax && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMax && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => item.price <= priceMax);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (priceMin && userData.sort === "sale") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["sale"], ["asc"]);
    } else if (priceMin && userData.sort === "name") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["name"], ["asc"]);
    } else if (priceMin && userData.sort === "priceUP") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["desc"]);
    } else if (priceMin && userData.sort === "priceDown") {
      sortGoods = array.filter((item) => priceMin <= item.price);
      sortGoods = _.orderBy(sortGoods, ["price"], ["asc"]);
    } else if (userData.sort === "priceDown") {
      sortGoods = _.orderBy(array, ["price"], ["asc"]);
    } else if (userData.sort === "priceUP") {
      sortGoods = _.orderBy(array, ["price"], ["desc"]);
    } else if (userData.sort === "name") {
      sortGoods = _.orderBy(array, ["name"], ["asc"]);
    } else if (userData.sort === "sale") {
      sortGoods = _.orderBy(array, ["sale"], ["asc"]);
    } else if (priceMin && priceMax) {
      sortGoods = array.filter(
        (item) => priceMin <= item.price && item.price <= priceMax
      );
    } else if (priceMin) {
      sortGoods = array.filter((item) => priceMin <= item.price);
    } else if (priceMax) {
      sortGoods = array.filter((item) => item.price <= priceMax);
    } else if (userData.inStock) {
      sortGoods = array.filter((item) => !item.absent);
    } else if (userData.brands) {
      sortGoods = array.filter((item) => item.brands === userData.brands);
    }
    return sortGoods;
  };
