import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: []
};
console.log("Rendu côté", typeof window !== "undefined" ? "client" : "serveur");

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, format, quantity, price } = action.payload;

            const existingProduct = state.cart.find(
                (item) => item.id === id && item.format === format
            );

            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                state.cart.push({
                    id,
                    name: action.payload.name,
                    image: action.payload.image,
                    price,
                    format,
                    quantity
                });
            }
        },
        updateQuantity: (state, action) => {
            const { id, format, quantity } = action.payload;
            const product = state.cart.find(
                (item) => item.id === id && item.format === format
            );

            if (product) {
                product.quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            const { id, format } = action.payload;
            state.cart = state.cart.filter(
                (item) => !(item.id === id && item.format === format)
            );
        },
        clearCart: (state) => {
            state.cart = []; // ✅ Correction ici
        }
    }
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
