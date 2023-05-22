import React, { useEffect } from 'react';
import logo from './assets/shape.png';
import './splash-screen.css';

const SplashScreenComponent = () => {

  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="splash-image" />
    </div>
  );
};

export default SplashScreenComponent;


