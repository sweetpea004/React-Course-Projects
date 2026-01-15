import { TOGGLE_FAV } from "../store/actions/products";
import { initStore } from "./store";

const configureProductsStore = () => {
    const actions = {
        TOGGLE_FAV: (cureState, productId ) => {
            const updatedProdList = cureState.products.map((product) => {
                if (product.id === productId) {
                    return ({ ...product, isFavorite: !product.isFavorite })
                } else {
                    return product;
                }
            })
            return { products: updatedProdList }
        }
    };

    initStore(actions, {products: [
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]});
};

export default configureProductsStore;