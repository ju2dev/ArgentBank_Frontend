import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import UserError from '../User/UserError';  
import './signIn.min.css';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState('');  // Ajoute un état pour l'erreur

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');  // Réinitialise l'erreur avant la tentative de connexion

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // Utilise la méthode POST pour envoyer des données au serveur
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe,
        }),
      });

      if (!response.ok) {
        throw new Error('Mot de passe ou Username incorrect');
      }

      const data = await response.json();

      // Stocker le token dans localStorage
      localStorage.setItem('token', data.body.token);

      // Faire un appel pour récupérer les informations du profil
      const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        headers: {
          'Authorization': `Bearer ${data.body.token}`,
        },
      });

      if (!profileResponse.ok) {
        throw new Error('Erreur lors de la récupération du profil');
      }

      const profileData = await profileResponse.json();

      // Dispatcher les informations de l'utilisateur dans Redux
      dispatch(setUser({
        email: formData.email,
        firstName: profileData.body.firstName,
        lastName: profileData.body.lastName,
        token: data.body.token,
      }));

      // Si "Remember me" est coché, garder l'état d'authentification
      if (formData.rememberMe) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
      }

      navigate('/user');
    } catch (error) {
      setErrorMessage(error.message);  // Mettre à jour l'état errorMessage avec le message d'erreur
    }
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/* Affichage du message d'erreur si présent */}
        {errorMessage && <UserError message={errorMessage} />}

        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={formData.rememberMe}
            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default SignInForm;