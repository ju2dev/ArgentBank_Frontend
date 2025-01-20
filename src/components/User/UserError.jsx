import React from 'react';
import './UserError.min.css';  

const UserError = ({ message }) => {
  if (!message) return null; // Si aucun message d'erreur n'est passé, ne rien afficher

  return (
    <div className="user-error">
      {message} 
    </div>
  );
};

export default UserError;