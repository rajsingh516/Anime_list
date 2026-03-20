import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import WelcomeMessage from './WelcomeMessage';
import HomeSection from './sections/HomeSection';
import WatchlistSection from './sections/WatchlistSection';
import ClubsSection from './sections/ClubsSection';
import RecommendationsSection from './sections/RecommendationsSection';
import Footer from './Footer';

function AnimeSection({ username, onLogout, isDark, onToggleTheme }) {
  return (
    <div className={`anime-section fade-in ${isDark ? 'dark' : 'light'}`}>
      <Header isDark={isDark} onToggleTheme={onToggleTheme} />
      <Navigation />

      <UserProfile username={username} />
      <WelcomeMessage username={username} />

      <HomeSection />
      <WatchlistSection />
      <ClubsSection />
      <RecommendationsSection />

      <Footer />
      
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default AnimeSection;
