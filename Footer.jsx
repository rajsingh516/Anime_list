import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        &copy; 2025 AnimeTV Tracker — Designed with ❤️ for anime lovers.
      </div>
      <div className="footer-section">
        Contact:{' '}
        <a href="mailto:info@animetvtracker.com">info@animetvtracker.com</a>
      </div>
      <div className="footer-section">
        Follow us:
        <a href="https://twitter.com/animetvtracker" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com/animetvtracker" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://facebook.com/animetvtracker" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
      <div className="footer-section">
        Quick Links:
        <a href="#home">Home</a>
        <a href="#watchlist">Watchlist</a>
        <a href="#clubs">Clubs</a>
        <a href="#recommendations">Recommendations</a>
        <a href="#auth">Login/Register</a>
      </div>
      <div className="footer-section">
        AnimeTV Tracker helps you organize, discover, and connect with anime and
        TV series fans worldwide. Join our community and stay updated!
      </div>
      <div className="footer-section">
        <a href="#privacy">Privacy Policy</a> |{' '}
        <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
