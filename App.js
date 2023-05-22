import React, { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {showSplash ? <SplashScreen /> : <MainContent />}
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Renderize o conteúdo principal do seu aplicativo */}
    </div>
  );
};

export default App;