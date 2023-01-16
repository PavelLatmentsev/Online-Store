
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import API from "../api";
import { nanoid } from "nanoid";
// import userService from "../services/user.service";
// import { toast } from "react-toastify";
// import { useAuth } from "./useAuth";
const ProductsContext = React.createContext();
export const useProducts = () => {
    return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
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
    const [products, setProducts] = useState([]);
    const [filtredProducts, setFiltredProducts] = useState([]);
    const [filtredSales, setFiltredSales] = useState([]);
    const [filtredTips, setFiltredTips] = useState([]);
    const [filtredNeedles, setFiltredNeedles] = useState([]);
    const [filtredMachines, setFiltredMachines] = useState([]);
    const [filtredPrinters, setFiltredPrinters] = useState([]);
    const [filtredKits, setFiltredKits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filtredPowers, setFiltredPowers] = useState([]);
    const [filtredPedals, setFiltredPedals] = useState([]);
    const [filtredPaints, setFiltredPaints] = useState([]);
    const [filtredConsumables, setFiltredConsumables] = useState([]);
    const [filtredCartridge, setFiltredCartridge] = useState([]);
    const [filtredAccessories, setFiltredAccessories] = useState([]);
    const [count, setCount] = useState(null);
    const [defaultState, setDefaultState] = useState(initialState);

    useEffect(() => {
        API.products.fetchAll().then((res) => {
            setIsLoading(true);
            setProducts(res);
            setFiltredProducts(res.filter(({ hit }) => hit));
            setFiltredSales(res.filter(({ category, sales }) => category === "machines" && sales));
            setFiltredTips(res.filter(({ category }) => category === "tips"));
            setFiltredNeedles(res.filter(({ category }) => category === "needles"));
            setFiltredMachines(res.filter(({ category }) => category === "machines"));
            setFiltredKits(res.filter(({ category }) => category === "kits"));
            setFiltredPrinters(res.filter(({ category }) => category === "printers"));
            setFiltredPowers(res.filter(({ category }) => category === "powers"));
            setFiltredPedals(res.filter(({ category }) => category === "pedals"));
            setFiltredPaints(res.filter(({ category }) => category === "paints"));
            setFiltredConsumables(res.filter(({ category }) => category === "consumables"));
            setFiltredCartridge(res.filter(({ category }) => category === "cartridge"));
            setFiltredAccessories(res.filter(({ category }) => category === "accessories"));
            setIsLoading(false);
            setCount(res.length);
        });
    }, [products]);

    const getFilterBestList = ({ target }) => {
        const { id } = target;
        if (id === "#hits") {
            return setFiltredProducts(products.filter(({ hit }) => hit));
        } else if (id === "#popular") {
            return setFiltredProducts(products.filter(({ popular }) => popular));
        } else if (id === "#news") {
            return setFiltredProducts(products.filter(({ novelty }) => novelty));
        } else if (id === "#promotion") {
            return setFiltredProducts(products.filter(({ promotion }) => promotion));
        }
    };
    const getFilterSales = (id) => {
        if (id === "#cartridge") {
            return setFiltredSales(products.filter(({ category, sales }) => category === "cartridge" && sales));
        } else if (id === "#machines") {
            return setFiltredSales(products.filter(({ category, sales }) => category === "machines" && sales));
        } else if (id === "#needles") {
            return setFiltredSales(products.filter(({ category, sales }) => category === "needles" && sales));
        } else if (id === "#consumables") {
            return setFiltredSales(products.filter(({ category, sales }) => category === "consumables" && sales));
        }
    };
    const getFilterTipsSales = (id) => {
        if (id === "#starter") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#builders") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#professional") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        } else if (id === "#consumables") {
            return setFiltredTips(products.filter(({ category }) => category === "tips"));
        }
    };
    const getFilterNeedlesSales = (id) => {
        if (id === "#starter") {
            return setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#builders") {
            return setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#professional") {
            return setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        } else if (id === "#consumables") {
            return setFiltredNeedles(products.filter(({ category }) => category === "needles"));
        }
    };

    const getFilterMachinesSales = (id) => {
        if (id === "#starter") {
            return setFiltredMachines(products.filter(({ category }) => category === "machines"));
        } else if (id === "#builders") {
            return setFiltredMachines(products.filter(({ category }) => category === "machines"));
        } else if (id === "#professional") {
            return setFiltredMachines(products.filter(({ category }) => category === "machines"));
        } else if (id === "#consumables") {
            return setFiltredMachines(products.filter(({ category }) => category === "machines"));
        }
    };
    const getFilterKitsSales = (id) => {
        if (id === "#starter") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#builders") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#professional") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        } else if (id === "#consumables") {
            return setFiltredKits(products.filter(({ category }) => category === "kits"));
        }
    };
    const getFilterPrintersSales = (id) => {
        if (id === "#starter") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#builders") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#professional") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        } else if (id === "#consumables") {
            return setFiltredPrinters(products.filter(({ category }) => category === "printers"));
        }
    };

    const getFilterPowersSales = (id) => {
        if (id === "#starter") {
            return setFiltredPowers(products.filter(({ category }) => category === "powers"));
        } else if (id === "#builders") {
            return setFiltredPowers(products.filter(({ category }) => category === "powers"));
        } else if (id === "#professional") {
            return setFiltredPowers(products.filter(({ category }) => category === "powers"));
        } else if (id === "#consumables") {
            return setFiltredPowers(products.filter(({ category }) => category === "powers"));
        }
    };
    const getFilterPedalsSales = (id) => {
        if (id === "#starter") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#builders") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#professional") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        } else if (id === "#consumables") {
            return setFiltredPedals(products.filter(({ category }) => category === "pedals"));
        }
    };
    const getById = (id, array) => {
        const findItem = array.find((el) => id === el._id);
        return findItem;
    };
    const getFilterPaintsSales = (id) => {
        if (id === "#starter") {
            return setFiltredPaints(products.filter(({ category }) => category === "paints"));
        } else if (id === "#builders") {
            return setFiltredPaints(products.filter(({ category }) => category === "paints"));
        } else if (id === "#professional") {
            return setFiltredPaints(products.filter(({ category }) => category === "paints"));
        } else if (id === "#consumables") {
            return setFiltredPaints(products.filter(({ category }) => category === "paints"));
        }
    };
    const getFilterConsumablesSales = (id) => {
        if (id === "#starter") {
            return setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#builders") {
            return setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#professional") {
            return setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        } else if (id === "#consumables") {
            return setFiltredConsumables(products.filter(({ category }) => category === "consumables"));
        }
    };
    const getFilterCartridgeSales = (id) => {
        if (id === "#starter") {
            return setFiltredCartridge(products.filter(({ category }) => category === "cartridge"));
        } else if (id === "#builders") {
            return setFiltredCartridge(products.filter(({ category }) => category === "cartridge"));
        } else if (id === "#professional") {
            return setFiltredCartridge(products.filter(({ category }) => category === "cartridge"));
        } else if (id === "#consumables") {
            return setFiltredCartridge(products.filter(({ category }) => category === "cartridge"));
        }
    };
    const getFilterAccessoriesSales = (id) => {
        if (id === "#starter") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#builders") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#professional") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        } else if (id === "#consumables") {
            return setFiltredAccessories(products.filter(({ category }) => category === "accessories"));
        }
    };
    const heandleDeleteItem = (id) => {
        const modernProducts = JSON.parse(localStorage.getItem("products")).filter((product) => product._id !== id);
        setProducts(modernProducts);
        localStorage.setItem("products", JSON.stringify(modernProducts));
        setCount(count - 1);
    };
    const UpdateItem = (product) => {
        const newArray = products.map((item) => item._id === product._id ? { ...item, ...product } : item);
        setProducts(newArray);
        localStorage.setItem("products", JSON.stringify(newArray));
    };
    const addNewProduct = (productData) => {
        products.push(productData);
        localStorage.setItem("products", JSON.stringify(products));
        setDefaultState(initialState);
    };
    return (
        <ProductsContext.Provider value={{
            filtredPowers,
            filtredPedals,
            filtredPaints,
            filtredConsumables,
            filtredCartridge,
            filtredAccessories,
            getFilterAccessoriesSales,
            getFilterCartridgeSales,
            getFilterConsumablesSales,
            getFilterPaintsSales,
            getFilterPedalsSales,
            getFilterPowersSales,
            getFilterPrintersSales,
            filtredPrinters,
            filtredKits,
            getFilterKitsSales,
            getFilterMachinesSales,
            filtredMachines,
            filtredNeedles,
            getFilterNeedlesSales,
            getById,
            filtredTips,
            getFilterTipsSales,
            products,
            getFilterBestList,
            isLoading,
            filtredProducts,
            filtredSales,
            getFilterSales,
            heandleDeleteItem,
            UpdateItem,
            addNewProduct,
            count,
            defaultState
        }}>
            {children}
        </ProductsContext.Provider>
    );
};
ProductsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default ProductsProvider;
