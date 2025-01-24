import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Profile from './pages/Profile/profile';
import Erreur from './pages/404/erreur';

const AppRoutes = ({ setupPageTitle }) => {
  return (
    <Routes>
      <Route path="/" element={<Home pTitle={setupPageTitle} />} />
      <Route path="/login" element={<Login pTitle={setupPageTitle} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Erreur pTitle={setupPageTitle} />} />
    </Routes>
  );
};

export default AppRoutes;