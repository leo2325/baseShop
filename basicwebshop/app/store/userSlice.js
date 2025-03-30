import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,         // Stocke les infos utilisateur
    isAuthenticated: false, // Indique si l'utilisateur est connecté
    loading: false,      // Gère l'état de chargement lors d'une connexion
    error: null          // Gère les erreurs d'authentification
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        loginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        updateProfile: (state, action) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        }
    }
});

// Export des actions
export const { loginRequest, loginSuccess, loginFailure, logout, updateProfile } = userSlice.actions;

// Export du reducer
export default userSlice.reducer;
