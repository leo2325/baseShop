import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],  // Liste des produits
    selectedProduct: null,  // Produit sélectionné pour la modale
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    }
});

export const { setProducts, selectProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
