import React from 'react';

function Header({ isDark, onToggleTheme }) {
  return (
    <>
      <header>🎬 Anime & TV Series Tracker</header>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </>
  );
}

export default Header;
