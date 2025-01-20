import { configureStore } from '@reduxjs/toolkit'; 
import userReducer from './userSlice'; 

// Création du store Redux pour gérer l'état global de l'application
const store = configureStore({
  reducer: {
    user: userReducer, // Association du userSlice pour gérer l'état utilisateur
  },
});

export default store; // Export du store pour l'utiliser dans l'application