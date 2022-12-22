const promocodes = [
    {
        _id: "67rdca3eeb7f6f324geed471961",
        title: "Самое жаркое лето века не хочет уходить и давит Вам новые краски до конца сезона.При покупке от 5500₽ Вы получите скидку 1% на абсолютно любой товар! Успей окрасить свою жизнь касками лета!",
        header: "Пакет “Лето”",
        url: "../../assets/promocodes/promo6.png"
    },

    {
        _id: "67rdca3eeb7f6fgee4234d4711962",
        title: "Тату набор + 2 пачки игл 2 Специально для четких и дерзких есть супервыгодное предложение, при покупке двух тату-наборов и двух пачек игл, Вы получите целых 5% скидки на воопложение своей мечты. Действуй и ты будешь непобедим!",
        header: "Пакет “Черный лебедь”",
        url: "../../assets/promocodes/promo5.png"
    },

    {
        _id: "67rdca3eeb7f6523fg43332eed471963",
        title: "5 иголок + 5 типсов Дикое и приятное колючее предложение, при покупке любых 5 игл и 5 типсов, Вы получите скидку 2% ! Время проявить себя, не упусти момент!",
        header: "Пакет “Дикобраз”",
        url: "../../assets/promocodes/promo4.png"
    },
    {
        _id: "67rdca3eeb437f655fgeed471964",
        title: "Самое жаркое лето века не хочет уходить и давит Вам новые краски до конца сезона. При покупке от 5500₽ Вы получите скидку 1% на абсолютно любой товар! Успей окрасить свою жизнь касками лета!",
        header: "Пакет “Очки”",
        url: "../../assets/promocodes/promo3.png"
    },
    {
        _id: "67rdca3eeb7f6fg46662eed471965",
        title: "5 иголок + 5 типсов Дикое и приятное колючее предложение, при покупке любых 5 игл и 5 типсов, Вы получите скидку 2% ! Время проявить себя, не упусти момент!",
        header: "Пакет “Татту”",
        url: "../../assets/promocodes/promo1.png"
    },
    {
        _id: "67rdca3eeb7f6fg46662eed471967",
        title: "Тату набор + 2 пачки игл 2 Специально для четких и дерзких есть супервыгодное предложение, при покупке двух тату-наборов и двух пачек игл, Вы получите целых 5% скидки на воопложение своей мечты. Действуй и ты будешь непобедим!",
        header: "Пакет “Краски”",
        url: "../../assets/promocodes/promo2.png"
    }
];

if (!localStorage.getItem("promocodes")) {
    localStorage.setItem("promocodes", JSON.stringify(promocodes));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("promocodes")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("promocodes")).find(
                    (promocode) => promocode._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById
};
