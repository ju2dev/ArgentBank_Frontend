import React from 'react';
import Navigation from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import SignIn from '../../components/SignIn/signIn';  

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