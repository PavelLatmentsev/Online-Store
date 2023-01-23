
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import productsService from "../service/products.service";
// import userService from "../services/user.service";
import { toast } from "react-toastify";
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
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(products.length);
    const [defaultState, setDefaultState] = useState(initialState);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
        setCount(products.length);
    }, [products]);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    async function getProducts() {
        try {
            const { content } = await productsService.get();
            setProducts(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    const getFilterBestList = (id, filterArray) => {
        console.log(id, filterArray);
        if (id === "#hits") {
            return filterArray.filter(({ hit }) => hit);
        } else if (id === "#popular") {
            return filterArray.filter(({ popular }) => popular);
        } else if (id === "#news") {
            return filterArray.filter(({ novelty }) => novelty);
        } else if (id === "#promotion") {
            return filterArray.filter(({ promotion }) => promotion);
        }
    };
    const getFilterSales = (id, filterArray) => {
        console.log(id, filterArray);
        if (id === "#cartridge") {
            return filterArray.filter(({ category, sales }) => category === "cartridge" && sales);
        } else if (id === "#machines") {
            return filterArray.filter(({ category, sales }) => category === "machines" && sales);
        } else if (id === "#needles") {
            return filterArray.filter(({ category, sales }) => category === "needles" && sales);
        } else if (id === "#consumables") {
            return filterArray.filter(({ category, sales }) => category === "consumables" && sales);
        }
    };
    const getFilterTipsSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "tips");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "tips");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "tips");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "tips");
        }
    };
    const getFilterNeedlesSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "needles");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "needles");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "needles");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "needles");
        }
    };

    const getFilterMachinesSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "machines");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "machines");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "machines");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "machines");
        }
    };
    const getFilterKitsSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "kits");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "kits");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "kits");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "kits");
        }
    };
    const getFilterPrintersSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "printers");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "printers");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "printers");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "printers");
        }
    };

    const getFilterPowersSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "powers");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "powers");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "powers");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "powers");
        }
    };
    const getFilterPedalsSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "pedals");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "pedals");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "pedals");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "pedals");
        }
    };
    const getById = (id, array) => {
        const findItem = array.find((el) => id === el._id);
        return findItem;
    };
    const getFilterPaintsSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "paints");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "paints");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "paints");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "paints");
        }
    };
    const getFilterConsumablesSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "consumables");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "consumables");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "consumables");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "consumables");
        }
    };
    const getFilterCartridgeSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "cartridge");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "cartridge");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "cartridge");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "cartridge");
        }
    };
    const getFilterAccessoriesSales = (id, filterArray) => {
        if (id === "#starter") {
            return filterArray.filter(({ category }) => category === "accessories");
        } else if (id === "#builders") {
            return filterArray.filter(({ category }) => category === "accessories");
        } else if (id === "#professional") {
            return filterArray.filter(({ category }) => category === "accessories");
        } else if (id === "#consumables") {
            return filterArray.filter(({ category }) => category === "accessories");
        }
    };
    const heandleDeleteItem = async (id) => {
        try {
            const { content } = await productsService.remove(id);
            if (content === null) {
                const newArray = products.filter(item => item._id !== id);
                setProducts(newArray);
                setCount(count - 1);
                setIsLoading(false);
            }
        } catch (error) {
            errorCatcher(error);
        }
    };
    const UpdateItem = async (product) => {
        try {
            const { content } = await productsService.update(product);
            console.log(content);
            const newArray = products.map((item) => item._id === content._id ? { ...item, ...content } : item);
            setProducts(newArray);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    const addNewProduct = async (productData) => {
        try {
            const { content } = await productsService.create(productData);
            products.push(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
        setDefaultState(initialState);
    };

    return (
        <ProductsContext.Provider value={{
            getFilterAccessoriesSales,
            getFilterCartridgeSales,
            getFilterConsumablesSales,
            getFilterPaintsSales,
            getFilterPedalsSales,
            getFilterPowersSales,
            getFilterPrintersSales,
            getFilterKitsSales,
            getFilterMachinesSales,
            getFilterNeedlesSales,
            getById,
            getFilterTipsSales,
            products,
            getFilterBestList,
            isLoading,
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
