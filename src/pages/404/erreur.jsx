import React from 'react';
import { Link } from 'react-router-dom';
import './erreur.min.css';

const erreur = () => {
  return (
    <div className="container-error">
      <span className="container-error__error">404</span>
      <span className="container-error__message">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="container-error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default erreur;