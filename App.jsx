import React, { useState } from 'react';
import './App.css';
import LoginSection from './components/LoginSection';
import AnimeSection from './components/AnimeSection';
import Confetti from './components/Confetti';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [isDark, setIsDark] = useState(true);

  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Confetti />
      {!isLoggedIn ? (
        <LoginSection onLogin={handleLogin} isDark={isDark} />
      ) : (
        <AnimeSection
          username={username}
          onLogout={handleLogout}
          isDark={isDark}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  );
}

export default App;
