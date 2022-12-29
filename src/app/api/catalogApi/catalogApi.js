const catalogList = [
    {
        _id: "67rdca3eeb7f6f324geed437999",
        url: "../../../assets/catalog/allgoods.jpg",
        name: "Все товары",
        path: "/catalog"
    },
    {
        _id: "67rdca3eeb7f6f324geed438000",
        url: "../../../assets/catalog/tips.png",
        name: "Наконечники",
        path: "/catalog/tips"
    },
    {
        _id: "67rdca3eeb7f6f324geed438001",
        url: "../../../assets/catalog/acsessories.png",
        name: "Аксессуары",
        path: "/catalog/acsessories"
    },
    {
        _id: "67rdca3eeb7f6f324geed438002",
        url: "../../../assets/catalog/cartridge.png",
        name: "Держатели",
        path: "/catalog/cartridge"
    },
    {
        _id: "67rdca3eeb7f6f324geed438003",
        url: "../../../assets/catalog/consumables.png",
        name: "Расходные материалы",
        path: "/catalog/consumables"
    },
    {
        _id: "67rdca3eeb7f6f324geed438004",
        url: "../../../assets/catalog/kits.png",
        name: "Наборы",
        path: "/catalog/tattookits"
    },
    {
        _id: "67rdca3eeb7f6f324geed438005",
        url: "../../../assets/catalog/machines.png",
        name: "Татту-машинки",
        path: "/catalog/machines"
    },
    {
        _id: "67rdca3eeb7f6f324geed438006",
        url: "../../../assets/catalog/needles.png",
        name: "Иглы",
        path: "/catalog/needles"
    },
    {
        _id: "67rdca3eeb7f6f324geed438007",
        url: "../../../assets/catalog/paints.png",
        name: "Краски",
        path: "/catalog/paints"
    },
    {
        _id: "67rdca3eeb7f6f324geed438008",
        url: "../../../assets/catalog/pedals.png",
        name: "Педали и провода",
        path: "/catalog/pedalswires"
    },
    {
        _id: "67rdca3eeb7f6f324geed438009",
        url: "../../../assets/catalog/powers.png",
        name: "Блоки питания",
        path: "/catalog/powers"
    },
    {
        _id: "67rdca3eeb7f6f324geed438010",
        url: "../../../assets/catalog/printers.png",
        name: "Принтеры",
        path: "/catalog/printers"
    }
];

if (!localStorage.getItem("catalogList")) {
    localStorage.setItem("catalogList", JSON.stringify(catalogList));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("catalogList")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("catalogList")).find(
                    (catalog) => catalog._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById
};
