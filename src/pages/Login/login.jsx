import React from 'react';
import Navigation from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import SignIn from '../../components/Login/login';  

const Sign = () => {
  return (
    <div className="main-back">
      <Navigation />
        <SignIn />  
      <Footer />
    </div>
  );
};

export default Sign;