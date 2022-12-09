const products = [
  {
    _id: "67rdca3eeb7f6f324geed471815",
    name: "Foxxx Kitsune Mini Black Vintage RCA",
    price: 6000,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911.png"

  },
  {
    _id: "67rdca3eeb7f6fgee4234d471816",
    name: "Foxxx Viper Fox Golden Vintage Lot #1 RCA",
    price: 8730,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911(1).png"
  },

  {
    _id: "67rdca3eeb7f6523fg43332eed471817",
    name: "Нитровиниловые перчатки Wally Plastic S",
    price: 20,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/gloves/6de74a0443c150b1b4af366ade05bb68870ccd911(2).png"
  },
  {
    _id: "67rdca3eeb437f655fgeed471818",
    name: "Forever Cartridge Grip Ergo 30 mm Огненно-Рыжий",
    price: 2037,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/cartridge/6de74a0443c150b1b4af366ade05bb68870ccd911(3).png"
  },
  {
    _id: "67rdca3eeb7f6fg46662eed471819",
    name: "Verge Direct 2.1 Pink gip EGO 4 mm liners",
    price: 2037,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911(4).png"
  },

  {
    _id: "67rdca3eeb7f6fgeed42371820",
    name: "Deuce Machines Direct Drive #7 RCA Samurai",
    price: 8000,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911(5).png"
  },

  {
    _id: "67rdca3eeb7f6f3223geed471821",
    name: "Cyborg Machines Alter Rotary Axis Cross Sexy Nymph",
    price: 11000,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911(6).png"
  },
  {
    _id: "67rdca3eeb7f6fgeed455656771822",
    name: "Verge Direct 2.1 Gunmetal",
    price: 10900,
    favorite: false,
    sales: false,
    src: "../../assets/productCards/machines/6de74a0443c150b1b4af366ade05bb68870ccd911(7).png"
  }

];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("products")));
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("products")).find(
          (product) => product._id === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById
};
