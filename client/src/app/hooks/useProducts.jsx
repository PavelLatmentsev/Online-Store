
import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import productsService from "../service/products.service";
import { toast } from "react-toastify";
const ProductsContext = React.createContext();
export const useProducts = () => {
    return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
    const initialState = [{
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
        brands: "",
        professions: false,
        builders: false,
        starter: false
    }];
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(products.length);
    const [defaultState, setDefaultState] = useState(initialState);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
        setCount(products.length);
    }, []);
    useEffect(() => {
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
    const getById = (id, array) => {
        const findItem = array.find((el) => id === el._id);
        return findItem;
    };

    const heandleDeleteItem = async (id) => {
        try {
            const { content } = await productsService.remove(id);
            if (!content) {
                const newArray = products.filter(item => item._id !== id);
                setProducts(newArray);
                setCount(count - 1);
                setIsLoading(false);
            }
        } catch (error) {
            errorCatcher(error);
        }
    };
    const updateItem = async (product) => {
        try {
            const { content } = await productsService.update(product);
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
            setDefaultState(initialState);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    };

    return (
        <ProductsContext.Provider value={{
            getById,
            products,
            isLoading,
            heandleDeleteItem,
            updateItem,
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
