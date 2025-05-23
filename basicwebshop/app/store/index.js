import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';  // ✅ Import du userSlice

// Configuration du store Redux
const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        user: userReducer    // ✅ Ajout du reducer utilisateur
    }
});

export default store;
