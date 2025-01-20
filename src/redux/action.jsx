// Définition de l'action "setUser" pour mettre à jour l'état de l'utilisateur
export const setUser = (user) => ({
    type: 'SET_USER', // Le type de l'action, utilisé par le réducteur pour savoir comment traiter l'action
    payload: user,    // La charge utile (payload) contient les données de l'utilisateur à ajouter à l'état
  });
  
  // Définition de l'action "logout" pour déconnecter l'utilisateur
  export const logout = () => ({
    type: 'LOGOUT', // Le type de l'action pour indiquer qu'une déconnexion est demandée
  });