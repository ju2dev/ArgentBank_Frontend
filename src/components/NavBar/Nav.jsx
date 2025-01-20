import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import argentBankLogo from '../../assets/img/argentBankLogo.png';
import './Nav.min.css';

const Navigation = ({ isAuthenticated, userName }) => {
  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {!isAuthenticated ? (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </Link>
        ) : (
          <>
            <Link className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faUserCircle} /> {userName}
            </Link>
            <Link
              className="main-nav-item"
              to="/"
              onClick={handleSignOut}
            >
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;