import { createSlice } from '@reduxjs/toolkit';

// Définition du slice 'user' pour gérer l'état utilisateur dans l'application
const userSlice = createSlice({
    name: 'user', // Nom du slice, utile pour l'identification dans le store
    initialState: {
        user: null, // L'utilisateur est initialisé à null (aucun utilisateur connecté)
        isAuthenticated: false, // État d'authentification, par défaut à faux
        token: null // Jeton d'authentification, initialisé à null
    },
    reducers: {
        // Action pour définir un utilisateur lorsqu'il se connecte
        setUser: (state, action) => {
            state.user = action.payload; // Mise à jour des informations de l'utilisateur
            state.isAuthenticated = true; // L'utilisateur est maintenant authentifié
            state.token = action.payload.token; // Stockage du jeton reçu
        },
        // Action pour réinitialiser l'utilisateur (déconnexion)
        clearUser: (state) => {
            state.user = null; // Réinitialisation des données utilisateur
            state.isAuthenticated = false; // Réinitialisation de l'état d'authentification
            state.token = null; // Suppression du jeton d'authentification
        }
    }
});

// Export des actions pour pouvoir les utiliser ailleurs dans l'application
export const { setUser, clearUser } = userSlice.actions;

// Export du reducer pour l'intégrer dans le store Redux
export default userSlice.reducer;