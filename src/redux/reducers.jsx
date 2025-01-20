// État initial de l'utilisateur, basé sur les valeurs du localStorage pour la persistance des données
const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Vérifie si l'utilisateur est authentifié
  user: null, // Initialisation de l'utilisateur à null (aucune donnée utilisateur chargée)
  token: localStorage.getItem('token') || null, // Récupère le token depuis le localStorage si disponible
};

// Reducer pour gérer les actions liées à l'utilisateur
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      // Action pour définir les informations de l'utilisateur et le marquer comme authentifié
      localStorage.setItem('isAuthenticated', 'true'); // Stocke l'état d'authentification
      localStorage.setItem('token', action.payload.token); // Stocke le token d'authentification
      return {
        ...state, // Conserve les autres propriétés du state
        isAuthenticated: true, // Met à jour l'état d'authentification
        user: action.payload, // Stocke les informations de l'utilisateur
        token: action.payload.token, // Met à jour le token
      };
    case 'LOGOUT':
      // Action pour déconnecter l'utilisateur et réinitialiser l'état
      localStorage.removeItem('isAuthenticated'); // Supprime l'état d'authentification stocké
      localStorage.removeItem('token'); // Supprime le token du localStorage
      return {
        ...state, // Conserve les autres propriétés du state
        isAuthenticated: false, // Réinitialise l'état d'authentification
        user: null, // Supprime les informations de l'utilisateur
        token: null, // Réinitialise le token
      };
    default:
      // Retourne l'état actuel si aucune action correspondante n'est trouvée
      return state;
  }
};

export default userReducer; // Export du reducer pour l'utiliser dans le store