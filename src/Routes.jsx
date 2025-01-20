import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Sign from './pages/Sign/sign';
import User from './pages/User/user';
import Erreur from './pages/404/erreur';

const AppRoutes = ({ setupPageTitle }) => {
  return (
    <Routes>
      <Route path="/" element={<Home pTitle={setupPageTitle} />} />
      <Route path="/sign-in" element={<Sign pTitle={setupPageTitle} />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<Erreur pTitle={setupPageTitle} />} />
    </Routes>
  );
};

export default AppRoutes;