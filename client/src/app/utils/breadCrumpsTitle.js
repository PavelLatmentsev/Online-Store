export const getTitleCrumps = (crumb, product) => {
    if (crumb === "catalog") {
     return "Каталог";
 } else if (crumb === "tips") {
     return "Наконечники";
 } else if (crumb === "accessories") {
     return "Аксессуары";
 } else if (crumb === "cartridge") {
     return "Картриджи";
 } else if (crumb === "consumables") {
     return "Расходники";
 } else if (crumb === "kits") {
     return "Наборы";
 } else if (crumb === "machines") {
     return "Машинки";
 } else if (crumb === "needles") {
     return "Иглы";
 } else if (crumb === "paints") {
     return "Краски";
 } else if (crumb === "pedals") {
     return "Педали";
 } else if (crumb === "powers") {
     return "Блоки питания";
 } else if (crumb === "printers") {
     return "Принтеры";
 } else if (crumb === "allgoods") {
     return "Все товары";
 } else if (crumb === "contacts") {
     return "Контакты";
 } else if (crumb === "sales") {
    return "Скидки";
} else if (crumb === "promocodes") {
    return "Промокоды";
} else if (crumb === "help") {
    return "Помощь";
} else if (crumb === "favourite") {
    return "Избранное";
} else if (crumb === "favourite") {
    return "Избранное";
} else if (crumb === "favourite") {
    return "Избранное";
} else if (crumb === "favourite") {
    return "Избранное";
} else if (crumb === "favourite") {
    return "Избранное";
} else if (crumb === "about") {
    return "О нас";
} else if (crumb === "cart") {
    return "Корзина";
} else if (crumb === "order") {
    return "Оформление заказа";
} else if (crumb === "private") {
    return "Личный кабинет";
} else if (crumb === "admin") {
    return "Админка";
} else if (product && crumb === product._id) {
    return product.name;
}
 };
